import Dropdown from "../../ui/Dropdown";
import Toggle from "../../ui/Toggle";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";
import { useTasks } from "../../../store/tasksStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface DateFilterDropdownProps {
  closeDateDropdown: () => void;
}

export const DateFilterDropdown = ({
  closeDateDropdown,
}: DateFilterDropdownProps) => {
  const dateFiltersChosen = useTasks((state) => state.dateFiltersChosen);
  const setDateFilters = useTasks((state) => state.setDateFilters);
  const [useDateFrom, setUseDateFrom] = useState(!!dateFiltersChosen.from);

  const datesSchema = z.object({
    dateFrom: z
      .string()
      .refine(
        (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Invalid date from",
      )
      .nullable(),
    dateTo: z
      .string()
      .refine(
        (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Invalid date to",
      ),
  });

  type DatesFormType = z.infer<typeof datesSchema>;

  const hasDateFilter = Object.values(dateFiltersChosen).some(
    (value) => typeof value === "string",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DatesFormType>({
    resolver: zodResolver(datesSchema),
    ...(hasDateFilter && {
      defaultValues: {
        dateFrom: dateFiltersChosen.from || "",
        dateTo: dateFiltersChosen.to || "",
      },
    }),
  });

  const onSubmit = (data: DatesFormType) => {
    setDateFilters({
      from: useDateFrom ? data.dateFrom : null,
      to: data.dateTo,
    });
    closeDateDropdown();
  };

  return (
    <Dropdown className="-left-6 flex flex-col w-72">
      <div className="flex flex-col gap-2 px-3 py-2">
        <span className="text-sm text-text-secondary">Use date from?</span>
        <Toggle
          checked={!!useDateFrom}
          onChange={setUseDateFrom}
          label="Use date from?"
        />
      </div>
      <div className="relative flex-1 py-2">
        {useDateFrom && (
          <Input
            type="date"
            label="Date from"
            {...register("dateFrom")}
            error={errors.dateFrom?.message}
          />
        )}
        <Input
          type="date"
          label="Date to"
          {...register("dateTo")}
          error={errors.dateTo?.message}
        />
      </div>
      <div className="shrink-0 border-t border-disabled p-2">
        <Button
          className="w-full py-2"
          onClick={handleSubmit(onSubmit)}
          version="secondary"
        >
          Done
        </Button>
      </div>
    </Dropdown>
  );
};
