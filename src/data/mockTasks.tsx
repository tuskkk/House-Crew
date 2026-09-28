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
        id: "task-1",
        name: "Clean the sink",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-2",
        name: "Clean the fridge",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-3",
        name: "Wipe the countertop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-4",
        name: "Clean the table",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-5",
        name: "Wash the dishes",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-6",
        name: "Load the dishwasher",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-7",
        name: "Unload the dishwasher",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-8",
        name: "Clean the stovetop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-9",
        name: "Clean the oven",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-10",
        name: "Wipe the kitchen cabinets - outside",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-11",
        name: "Clean and organize the kitchen cabinets - inside",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-12",
        name: "Unload the dish drying rack",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-13",
        name: "Dust the surfaces",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-14",
        name: "Organize the wall-mounted shelves",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-15",
        name: "Organize the sideboard countertop",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-16",
        name: "Organize the shelf above the wardrobe",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-17",
        name: "Mop the floor",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-18",
        name: "Clean the radiator",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-19",
        name: "Replace the water filter jug cartridge",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-20",
        name: "Clean the high chair",
        category: { id: "category-2", name: "Kitchen" },
      },
      {
        id: "task-21",
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
        id: "task-1",
        name: "Change the bed linen",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-2",
        name: "Wash the mattress cover",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-3",
        name: "Wash the mattress cover",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-4",
        name: "Dust the surfaces",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-5",
        name: "Organize the tops of the cabinets and the shelf",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-6",
        name: "Clean the windowsill",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-7",
        name: "Clean the window",
        category: { id: "category-3", name: "Bedroom" },
      },
      {
        id: "task-8",
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
        id: "task-1",
        name: "Dust the surfaces",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-2",
        name: "Clean the windowsill (step)",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-3",
        name: "Mop the floor",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-4",
        name: "Vacuum the corner sofa with the Kärcher",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-5",
        name: "Organize the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-6",
        name: "Vacuum the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-7",
        name: "Clean the playpen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-8",
        name: "Change the bed linen",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-9",
        name: "Vacuum the stairs with the Kärcher",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-10",
        name: "Clean the windows",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-11",
        name: "Clean the glass cabinet doors",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-12",
        name: "Organize the bookshelves",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-13",
        name: "Organize the wall-mounted shelving units",
        category: { id: "category-4", name: "Living Room" },
      },
      {
        id: "task-14",
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
        id: "task-1",
        name: "Vacuum / sweep the floor",
        category: { id: "category-5", name: "Terrace" },
      },
      {
        id: "task-2",
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
        id: "task-1",
        name: "Mop the floor",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-2",
        name: "Dust the surfaces",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-3",
        name: "Clean the mirror",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-4",
        name: "Vacuum the bench with the Kärcher",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-5",
        name: "Organize the bench storage compartment",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-6",
        name: "Organize the corner shelving unit",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-7",
        name: "Clean the shoe tray",
        category: { id: "category-6", name: "Hallway" },
      },
      {
        id: "task-8",
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
        id: "task-1",
        name: "Mop the floor",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-2",
        name: "Clean the rolling shelving unit",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-3",
        name: "Pack up old egg cartons",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-4",
        name: "Organize the shelves",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-5",
        name: "Throw away expired products",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-6",
        name: "Clean the outside window",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-7",
        name: "Clean the glass doors",
        category: { id: "category-7", name: "Pantry" },
      },
      {
        id: "task-8",
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
        id: "task-1",
        name: "Mop the floor",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-2",
        name: "Organize the contents",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-3",
        name: "Clean the bedding and towel containers",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-4",
        name: "Clean the outside windows",
        category: { id: "category-8", name: "Storage Room" },
      },
      {
        id: "task-5",
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
        id: "task-1",
        name: "Mop the floor",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-2",
        name: "Clean the windowsill",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-3",
        name: "Dust the surfaces",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-4",
        name: "Organize the contents",
        category: { id: "category-9", name: "Nook" },
      },
      {
        id: "task-5",
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
        id: "task-1",
        name: "Vacuum / mop the floor",
        category: { id: "category-10", name: "Garage" },
      },
      {
        id: "task-2",
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
        id: "task-1",
        name: "Grocery shopping",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-2",
        name: "Diapers, cotton pads, wet wipes",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-3",
        name: "Buy medicines at the pharmacy",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-4",
        name: "Bread",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-5",
        name: "Toilet paper",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-6",
        name: "Kitchen towel",
        category: { id: "category-11", name: "Shopping" },
      },
      {
        id: "task-7",
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
        id: "task-1",
        name: "Breakfast",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-2",
        name: "Lunch",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-3",
        name: "Dinner",
        category: { id: "category-12", name: "Cooking" },
      },
      {
        id: "task-4",
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
        id: "task-1",
        name: "Take the child to nursery",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-2",
        name: "Pick the child up from nursery",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-3",
        name: "Put the child down for a nap",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-4",
        name: "Wake the child up from a nap",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-5",
        name: "Put the child to bed",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-6",
        name: "Go for a walk",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-7",
        name: "Morning grooming",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-8",
        name: "Change clothes during the day",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-9",
        name: "Bath time",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-10",
        name: "Playtime",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-11",
        name: "Read a book",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-12",
        name: "Change a dirty diaper",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-13",
        name: "Doctor's appointment",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-14",
        name: "Vaccination",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-15",
        name: "Trip / outing",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-16",
        name: "Prepare breakfast",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-17",
        name: "Prepare lunch",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-18",
        name: "Prepare an afternoon snack",
        category: { id: "category-13", name: "Childcare" },
      },
      {
        id: "task-19",
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
        id: "task-1",
        name: "Wash baby clothes - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-2",
        name: "Wash baby clothes - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-3",
        name: "Wash baby clothes - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-4",
        name: "Wash baby clothes - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-5",
        name: "Hang baby laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-6",
        name: "Hang baby laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-7",
        name: "Hang baby laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-8",
        name: "Hang baby laundry - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-9",
        name: "Fold baby laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-10",
        name: "Fold baby laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-11",
        name: "Fold baby laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-12",
        name: "Fold baby laundry - delicates and toys",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-13",
        name: "Wash sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-14",
        name: "Wash delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-15",
        name: "Wash wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-16",
        name: "Wash shoes",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-17",
        name: "Wash whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-18",
        name: "Wash lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-19",
        name: "Wash darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-20",
        name: "Wash blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-21",
        name: "Wash towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-22",
        name: "Wash bed linen",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-23",
        name: "Hang laundry - sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-24",
        name: "Hang laundry - delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-25",
        name: "Hang laundry - wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-26",
        name: "Hang laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-27",
        name: "Hang laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-28",
        name: "Hang laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-29",
        name: "Hang laundry - blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-30",
        name: "Hang laundry - towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-31",
        name: "Hang laundry - bed linen",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-32",
        name: "Fold laundry - sportswear",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-33",
        name: "Fold laundry - delicates",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-34",
        name: "Fold laundry - wool",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-35",
        name: "Fold laundry - whites",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-36",
        name: "Fold laundry - lights",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-37",
        name: "Fold laundry - darks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-38",
        name: "Fold laundry - blacks",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-39",
        name: "Fold laundry - towels",
        category: { id: "category-14", name: "Laundry" },
      },
      {
        id: "task-40",
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
        id: "task-1",
        name: "Vacuuming",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-2",
        name: "Take out the trash - organic",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-3",
        name: "Take out the trash - mixed waste",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-4",
        name: "Take out the trash - plastic",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-5",
        name: "Take out the trash - paper",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-6",
        name: "Take out the trash - textiles",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-7",
        name: "Take out the trash - bulky waste",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-8",
        name: "Take out the trash - glass",
        category: { id: "category-15", name: "General" },
      },
      {
        id: "task-9",
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

export const mockTasks: Task[] = categories.flatMap((category, categoryIndex) =>
  category.tasks.map((task, taskIndex): Task => {
    const taskNumber = categoryIndex * 100 + taskIndex + 1;

    return {
      id: `task-${taskNumber}`,
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
