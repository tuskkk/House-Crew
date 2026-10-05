import type { Task } from "../types/task";
import type { TaskCategoryData } from "../types/category";

const categories: TaskCategoryData[] = [
  {
    id: "category-1",
    name: "Bathroom",
    tasks: [
      {
        id: "task-1",
        name: "Clean the sink",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-2",
        name: "Clean the shower tray",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-3",
        name: "Clean the shower enclosure",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-4",
        name: "Clean the toilet",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-5",
        name: "Clean the mirror",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-6",
        name: "Mop the floor",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-7",
        name: "Clean the shelves",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-8",
        name: "Dust the surfaces",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-9",
        name: "Clean the cabinet above the toilet",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-10",
        name: "Clean the drawers",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-11",
        name: "Clean the tiles",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-12",
        name: "Clean the shower drain",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-13",
        name: "Clean the sink drain",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-14",
        name: "Replace the towels",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-15",
        name: "Replace the bath mat",
        category: { id: "category-1", name: "Bathroom" },
      },
      {
        id: "task-16",
        name: "Apply anti-mould spray",
        category: { id: "category-1", name: "Bathroom" },
      },
    ],
  },
  {
    id: "category-2",
    name: "Kitchen",
    tasks: [
      {
        id: "task-17",
        name: "Clean the sink",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-18",
        name: "Clean the fridge",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-19",
        name: "Wipe the countertop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-20",
        name: "Clean the table",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-21",
        name: "Wash the dishes",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-22",
        name: "Load the dishwasher",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-23",
        name: "Unload the dishwasher",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-24",
        name: "Clean the stovetop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-25",
        name: "Clean the oven",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-26",
        name: "Wipe the kitchen cabinets - outside",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-27",
        name: "Clean and organize the kitchen cabinets - inside",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-28",
        name: "Unload the dish drying rack",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-29",
        name: "Dust the surfaces",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-30",
        name: "Organize the wall-mounted shelves",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-31",
        name: "Organize the sideboard countertop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-32",
        name: "Organize the shelf above the wardrobe",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-33",
        name: "Mop the floor",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-34",
        name: "Clean the radiator",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-35",
        name: "Replace the water filter jug cartridge",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-36",
        name: "Clean the high chair",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-37",
        name: "Clean the bins",
        category: { id: "category-2", name: "Kitchen" },
      },
    ],
  },
  {
    id: "category-3",
    name: "Bedroom",
    tasks: [
      {
        id: "task-38",
        name: "Change the bed linen",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-39",
        name: "Wash the mattress cover",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-40",
        name: "Wash the mattress cover",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-41",
        name: "Dust the surfaces",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-42",
        name: "Organize the tops of the cabinets and the shelf",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-43",
        name: "Clean the windowsill",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-44",
        name: "Clean the window",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-45",
        name: "Mop the floor",
        category: { id: "category-3", name: "Bedroom" },
      },
    ],
  },
  {
    id: "category-4",
    name: "Living Room",
    tasks: [
      {
        id: "task-46",
        name: "Dust the surfaces",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-47",
        name: "Clean the windowsill (step)",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-48",
        name: "Mop the floor",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-49",
        name: "Vacuum the corner sofa with the Kärcher",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-50",
        name: "Organize the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-51",
        name: "Vacuum the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-52",
        name: "Clean the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-53",
        name: "Change the bed linen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-54",
        name: "Vacuum the stairs with the Kärcher",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-55",
        name: "Clean the windows",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-56",
        name: "Clean the glass cabinet doors",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-57",
        name: "Organize the bookshelves",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-58",
        name: "Organize the wall-mounted shelving units",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-59",
        name: "Clean the wardrobe doors",
        category: { id: "category-4", name: "Living Room" },
      },
    ],
  },
  {
    id: "category-5",
    name: "Terrace",
    tasks: [
      {
        id: "task-60",
        name: "Vacuum / sweep the floor",
        category: { id: "category-5", name: "Terrace" },
      },
      {
        id: "task-61",
        name: "Mop the floor",
        category: { id: "category-5", name: "Terrace" },
      },
    ],
  },
  {
    id: "category-6",
    name: "Hallway",
    tasks: [
      {
        id: "task-62",
        name: "Mop the floor",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-63",
        name: "Dust the surfaces",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-64",
        name: "Clean the mirror",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-65",
        name: "Vacuum the bench with the Kärcher",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-66",
        name: "Organize the bench storage compartment",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-67",
        name: "Organize the corner shelving unit",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-68",
        name: "Clean the shoe tray",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-69",
        name: "Clean the entrance door",
        category: { id: "category-6", name: "Hallway" },
      },
    ],
  },
  {
    id: "category-7",
    name: "Pantry",
    tasks: [
      {
        id: "task-70",
        name: "Mop the floor",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-71",
        name: "Clean the rolling shelving unit",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-72",
        name: "Pack up old egg cartons",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-73",
        name: "Organize the shelves",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-74",
        name: "Throw away expired products",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-75",
        name: "Clean the outside window",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-76",
        name: "Clean the glass doors",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-77",
        name: "Clean the potato container",
        category: { id: "category-7", name: "Pantry" },
      },
    ],
  },
  {
    id: "category-8",
    name: "Storage Room",
    tasks: [
      {
        id: "task-78",
        name: "Mop the floor",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-79",
        name: "Organize the contents",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-80",
        name: "Clean the bedding and towel containers",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-81",
        name: "Clean the outside windows",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-82",
        name: "Clean the glass doors",
        category: { id: "category-8", name: "Storage Room" },
      },
    ],
  },
  {
    id: "category-9",
    name: "Nook",
    tasks: [
      {
        id: "task-83",
        name: "Mop the floor",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-84",
        name: "Clean the windowsill",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-85",
        name: "Dust the surfaces",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-86",
        name: "Organize the contents",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-87",
        name: "Apply anti-mould spray",
        category: { id: "category-9", name: "Nook" },
      },
    ],
  },
  {
    id: "category-10",
    name: "Garage",
    tasks: [
      {
        id: "task-88",
        name: "Vacuum / mop the floor",
        category: { id: "category-10", name: "Garage" },
      },
      {
        id: "task-89",
        name: "Organize the contents",
        category: { id: "category-10", name: "Garage" },
      },
    ],
  },
  {
    id: "category-11",
    name: "Shopping",
    tasks: [
      {
        id: "task-90",
        name: "Grocery shopping",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-91",
        name: "Diapers, cotton pads, wet wipes",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-92",
        name: "Buy medicines at the pharmacy",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-93",
        name: "Bread",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-94",
        name: "Toilet paper",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-95",
        name: "Kitchen towel",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-96",
        name: "Cleaning supplies",
        category: { id: "category-11", name: "Shopping" },
      },
    ],
  },
  {
    id: "category-12",
    name: "Cooking",
    tasks: [
      {
        id: "task-97",
        name: "Breakfast",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-98",
        name: "Lunch",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-99",
        name: "Dinner",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-100",
        name: "Dessert",
        category: { id: "category-12", name: "Cooking" },
      },
    ],
  },
  {
    id: "category-13",
    name: "Childcare",
    tasks: [
      {
        id: "task-101",
        name: "Take the child to nursery",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-102",
        name: "Pick the child up from nursery",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-103",
        name: "Put the child down for a nap",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-104",
        name: "Wake the child up from a nap",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-105",
        name: "Put the child to bed",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-106",
        name: "Go for a walk",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-107",
        name: "Morning grooming",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-108",
        name: "Change clothes during the day",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-109",
        name: "Bath time",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-110",
        name: "Playtime",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-111",
        name: "Read a book",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-112",
        name: "Change a dirty diaper",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-113",
        name: "Doctor's appointment",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-114",
        name: "Vaccination",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-115",
        name: "Trip / outing",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-116",
        name: "Prepare breakfast",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-117",
        name: "Prepare lunch",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-118",
        name: "Prepare an afternoon snack",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-119",
        name: "Prepare dinner",
        category: { id: "category-13", name: "Childcare" },
      },
    ],
  },
  {
    id: "category-14",
    name: "Laundry",
    tasks: [
      {
        id: "task-120",
        name: "Wash baby clothes - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-121",
        name: "Wash baby clothes - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-122",
        name: "Wash baby clothes - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-123",
        name: "Wash baby clothes - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-124",
        name: "Hang baby laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-125",
        name: "Hang baby laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-126",
        name: "Hang baby laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-127",
        name: "Hang baby laundry - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-128",
        name: "Fold baby laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-129",
        name: "Fold baby laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-130",
        name: "Fold baby laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-131",
        name: "Fold baby laundry - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-132",
        name: "Wash sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-133",
        name: "Wash delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-134",
        name: "Wash wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-135",
        name: "Wash shoes",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-136",
        name: "Wash whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-137",
        name: "Wash lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-138",
        name: "Wash darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-139",
        name: "Wash blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-140",
        name: "Wash towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-141",
        name: "Wash bed linen",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-142",
        name: "Hang laundry - sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-143",
        name: "Hang laundry - delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-144",
        name: "Hang laundry - wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-145",
        name: "Hang laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-146",
        name: "Hang laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-147",
        name: "Hang laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-148",
        name: "Hang laundry - blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-149",
        name: "Hang laundry - towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-150",
        name: "Hang laundry - bed linen",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-151",
        name: "Fold laundry - sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-152",
        name: "Fold laundry - delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-153",
        name: "Fold laundry - wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-154",
        name: "Fold laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-155",
        name: "Fold laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-156",
        name: "Fold laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-157",
        name: "Fold laundry - blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-158",
        name: "Fold laundry - towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-159",
        name: "Fold laundry - bed linen",
        category: { id: "category-14", name: "Laundry" },
      },
    ],
  },
  {
    id: "category-15",
    name: "General",
    tasks: [
      {
        id: "task-160",
        name: "Vacuuming",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-161",
        name: "Take out the trash - organic",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-162",
        name: "Take out the trash - mixed waste",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-163",
        name: "Take out the trash - plastic",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-164",
        name: "Take out the trash - paper",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-165",
        name: "Take out the trash - textiles",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-166",
        name: "Take out the trash - bulky waste",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-167",
        name: "Take out the trash - glass",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-168",
        name: "Replace plastic bottles",
        category: { id: "category-15", name: "General" },
      },
    ],
  },
];

const frequencyOptions = [
  "daily",
  "weekly",
  "fortnightly",
  "monthly",
  "quarterly",
  "yearly",
] as const;

const priorityOptions = ["low", "medium", "high"] as const;
/* The way mockTasks is generated here causes task edition to be lost when the app is reloaded, because the mockTasks are regenerated from scratch each time.
   This won't be a problem after adding a backend, where tasks will be stored in a database, but it is a problem in development. */
export const mockTasks: Task[] = categories.flatMap((category, categoryIndex) =>
  category.tasks.map((task, taskIndex): Task => {
    return {
      id: task.id,
      category: {
        id: category.id,
        name: category.name,
      },
      name: task.name,
      details: {
        cycleDetails:
          taskIndex % 5 === 0
            ? frequencyOptions[categoryIndex % frequencyOptions.length]
            : undefined,
        dueDate: null,
        priority: priorityOptions[taskIndex % priorityOptions.length],
        assigneeId: null,
        statisticsDetails: {
          count: {
            general: 0,
            byTime: {
              day: 0,
              week: 0,
              month: 0,
              year: 0,
            },
          },
          completionPercentage: {
            general: 0,
            byTime: {
              day: 0,
              week: 0,
              month: 0,
              year: 0,
            },
          },
        },
      },
    };
  }),
);

export { categories };
