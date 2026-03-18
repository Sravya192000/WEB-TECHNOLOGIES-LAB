// Step 1: Switch to vehicles database 
use('vehicles');
print("Step 1: Using 'vehicles' database");

// Step 2: Show all databases
print("\n Step 2: All databases:");
printjson(db.adminCommand({ listDatabases: 1 }));

// Step 3: Create collections (two_wheelers = CAPPED, four_wheelers = normal)
printjson(db.createCollection("two_wheelers", { capped: true, size: 1048576, max: 50000 }));
printjson(db.createCollection("four_wheelers"));


// Step 4: Insert 5 TWO-WHEELERS
db.two_wheelers.insertMany([
  {
    bike_name: "Pulsar NS200",
    model: "geared",
    category: "200cc",
    colors_available: ["red", "black", "blue"],
    manufacturer: "Bajaj",
    performance: 8.5,
    timestamp: new Date("2023-01-15"),
    price: 150000
  },
  {
    bike_name: "Shine 125",
    model: "gearless", 
    category: "125cc",
    colors_available: ["silver", "blue", "red"],
    manufacturer: "Honda",
    performance: 7.2,
    timestamp: new Date("2022-06-10"),
    price: 85000
  },
  {
    bike_name: "Apache RTR 160",
    model: "geared",
    category: "160cc",
    colors_available: ["sport red", "black"],
    manufacturer: "TVS",
    performance: 8.0,
    timestamp: new Date("2023-03-20"),
    price: 125000
  },
  {
    bike_name: "Activa 6G",
    model: "gearless",
    category: "110cc",
    colors_available: ["white", "pearl yellow"],
    manufacturer: "Honda",
    performance: 6.8,
    timestamp: new Date("2021-11-01"),
    price: 75000
  },
  {
    bike_name: "Dominar 400",
    model: "geared",
    category: "400cc",
    colors_available: ["black", "green"],
    manufacturer: "Bajaj", 
    performance: 9.1,
    timestamp: new Date("2024-02-01"),
    price: 220000
  }
]);
print("✅ Step 4: 5 two-wheelers inserted");

// Step 5: Insert 5 FOUR-WHEELERS  
db.four_wheelers.insertMany([
  {
    vehicle_name: "Swift",
    model: "own",
    category: "car",
    variants: ["vxi", "zxi", "petrol"],
    manufacturer: "Maruti Suzuki",
    performance: 7.8,
    timestamp: new Date("2023-04-10"),
    price: 750000
  },
  {
    vehicle_name: "Thar",
    model: "own",
    category: "car",
    variants: ["diesel", "petrol", "LX"],
    manufacturer: "Mahindra",
    performance: 8.7,
    timestamp: new Date("2022-10-15"),
    price: 1400000
  },
  {
    vehicle_name: "Eicher Pro 2049",
    model: "commercial",
    category: "mini truck",
    variants: ["diesel", "CNG"],
    manufacturer: "Eicher",
    performance: 7.5,
    timestamp: new Date("2021-08-20"),
    price: 1200000
  },
  {
    vehicle_name: "Creta",
    model: "own",
    category: "car",
    variants: ["diesel", "petrol", "SX"],
    manufacturer: "Hyundai",
    performance: 8.2,
    timestamp: new Date("2023-07-05"),
    price: 1100000
  },
  {
    vehicle_name: "Viking Bus",
    model: "commercial", 
    category: "bus",
    variants: ["diesel", "12m"],
    manufacturer: "Ashok Leyland",
    performance: 7.9,
    timestamp: new Date("2022-12-01"),
    price: 2500000
  }
]);
print(" 5: 5 four-wheelers inserted");

// Step 6: Display ALL documents
print("\n 6: ALL DOCUMENTS");
print("=== TWO WHEELERS ===");
printjson(db.two_wheelers.find().toArray());
print("\n=== FOUR WHEELERS ===");
printjson(db.four_wheelers.find().toArray());

// Step 7: Show only NAME & PRICE
print("\n 7: NAME & PRICE ONLY");
printjson(db.two_wheelers.find({}, {bike_name: 1, price: 1, _id: 0}).toArray());
printjson(db.four_wheelers.find({}, {vehicle_name: 1, price: 1, _id: 0}).toArray());

// Step 8: Two-wheelers from HONDA
print("\n 8: HONDA BIKES ONLY");
printjson(db.two_wheelers.find({manufacturer: "Honda"}).toArray());

// Step 9: Four-wheelers with DIESEL
print("\n 9: DIESEL FOUR-WHEELERS");
printjson(db.four_wheelers.find({variants: "diesel"}).toArray());

// Step 10: Performance > 5
print("\n 10: PERFORMANCE > 5");
printjson(db.two_wheelers.find(
  {performance: {$gt: 5}}, 
  {bike_name: 1, category: 1, manufacturer: 1, _id: 0}
).toArray());

printjson(db.four_wheelers.find(
  {performance: {$gt: 5}}, 
  {vehicle_name: 1, category: 1, manufacturer: 1, _id: 0}
).toArray());

print("\n🎉 ALL 10 OPERATIONS COMPLETED SUCCESSFULLY!");
