// Step 1: Switch to animal database
use('animal');
print("Step 1: Using 'animal' database");
// Step 2: Show all databases
print("\nStep 2: All databases:");
printjson(db.adminCommand({ listDatabases: 1 }));
// Step 3: Create collections
print("\nStep 3: Creating collections");

printjson(db.createCollection("wild_animals", { capped: true, size: 1048576, max: 50000 }));
printjson(db.createCollection("domestic_animals"));
// Step 4: Insert wild animals
db.wild_animals.insertMany([
{
animal_name:"Lion",
nature:"harm",
favorite_foods:["meat","deer"],
care_taker_name:"Ramesh",
life_span:14,
timestamp:new Date("2022-01-10"),
expenses:50000
},
{
animal_name:"Tiger",
nature:"harm",
favorite_foods:["meat","rabbit"],
care_taker_name:"Suresh",
life_span:15,
timestamp:new Date("2023-03-12"),
expenses:55000
},
{
animal_name:"Elephant",
nature:"harmless",
favorite_foods:["grass","fruits"],
care_taker_name:"Mahesh",
life_span:60,
timestamp:new Date("2021-07-01"),
expenses:70000
},
{
animal_name:"Leopard",
nature:"harm",
favorite_foods:["deer","rabbit"],
care_taker_name:"Ramesh",
life_span:17,
timestamp:new Date("2022-05-11"),
expenses:48000
},
{
animal_name:"Bear",
nature:"harm",
favorite_foods:["fish","berries"],
care_taker_name:"Suresh",
life_span:20,
timestamp:new Date("2020-11-05"),
expenses:45000
}
]);

print("Step 4: 5 wild animals inserted");
// Step 5: Insert domestic animals
db.domestic_animals.insertMany([
{
animal_name:"Dog",
gender:"male",
favorite_foods:["meat","biscuits"],
animal_petname:"Rocky",
life_span:12,
timestamp:new Date("2023-01-01"),
expenses:20000
},
{
animal_name:"Cat",
gender:"female",
favorite_foods:["fish","milk"],
animal_petname:"Kitty",
life_span:15,
timestamp:new Date("2022-06-15"),
expenses:15000
},
{
animal_name:"Cow",
gender:"female",
favorite_foods:["grass","fodder"],
animal_petname:"Gauri",
life_span:20,
timestamp:new Date("2021-09-10"),
expenses:30000
},
{
animal_name:"Goat",
gender:"male",
favorite_foods:["grass","leaves"],
animal_petname:"Motu",
life_span:10,
timestamp:new Date("2023-02-02"),
expenses:12000
},
{
animal_name:"Rabbit",
gender:"female",
favorite_foods:["carrot","grass"],
animal_petname:"Bunny",
life_span:8,
timestamp:new Date("2022-10-20"),
expenses:10000
}
]);

print("Step 5: 5 domestic animals inserted");
// Step 6: Display all animals
print("\nStep 6: ALL ANIMALS");

print("=== WILD ANIMALS ===");
printjson(db.wild_animals.find().toArray());

print("=== DOMESTIC ANIMALS ===");
printjson(db.domestic_animals.find().toArray());
// Step 7: Show animal name and expenses
print("\nStep 7: Animal name and expenses");

printjson(db.wild_animals.find({}, {animal_name:1, expenses:1, _id:0}).toArray());

printjson(db.domestic_animals.find({}, {animal_name:1, expenses:1, _id:0}).toArray());
// Step 8: Domestic animals with lifespan = 10
print("\nStep 8: Domestic animals with lifespan 10");

printjson(db.domestic_animals.find({life_span:10}).toArray());
// Step 9: Wild animals under caretaker Ramesh
print("\nStep 9: Wild animals under caretaker Ramesh");

printjson(db.wild_animals.find({care_taker_name:"Ramesh"}).toArray());
// Step 10: Animals with lifespan > 5 years
print("\nStep 10: Lifespan > 5 years");

printjson(db.wild_animals.find(
{life_span:{$gt:5}},
{animal_name:1,favorite_foods:1,expenses:1,_id:0}
).toArray());

printjson(db.domestic_animals.find(
{life_span:{$gt:5}},
{animal_name:1,favorite_foods:1,expenses:1,_id:0}
).toArray());
print("\nALL ZOO DATABASE OPERATIONS COMPLETED SUCCESSFULLY");