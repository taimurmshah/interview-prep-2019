/*OOP practice, I want to try to implement a parking lot.
 * Assumptions:
 * 1. a parkingLot has multiple levels. a level has multiple rows of spots
 * 2. the parking lot can park motorcycles, cars, and buses.
 * 3. the parking lot has motorcycle spots, compact spots, and large spots.
 * 4. a motorcycle can park in any spot.
 * 5. a car can park in either a single compact spot or a single large spot
 * 6. a bus can park in a five large sports that are consecutive and in the same row. it cannot park in small spots.
 *
 * 1. Core Objects:
 *     Nouns:
 *       1. Motorcycle
 *           - size
 *           - isParked
 *       2. Car
 *           - size
 *           - isParked
 *       3. Bus
 *           - size
 *           - isParked
 *       4. ParkingLot
 *           - unique identifier; maybe a name
 *           - levels = []
 *           - maxOccupancy (this can just be the return value of a method?) -> count levels * rows * spots
 *
 *       5. Level
 *       6. Row
 *           - spots = [];
 *           - availableSpots -> iterate through spots, check if
 *       7. Spot
 *           - size = one of these = "motorcycle, compact, large"
 *           - isOccupied = boolean
 *           - parkCar -> method
 *
 *
 * 2. Relationships:
 *       1. Motorcycle, Car, and Bus might each have a size property, so each of them might be a ___ (Automobile, Vehicle)
 *       2. A ParkingLot has many Levels.
 *       3. A Level has many Rows
 *       4. A Row has many Spots.
 *
 * 3. Actions: Methods and Functions
 *       1. An Automobile needs to be able to check if it can park in a ParkingLot; rather, an Automobile should be able to park if a ParkingLot has available space;
 *           - This means, to me, that a ParkingLot needs a method where it will return a boolean value, true if there's space for this particular Automobile
 *       2. An Automobile needs to be able to park/un-park
 *       3. a Row needs a method canBusParkHere -> boolean value
 *           - Checks if there are five consecutive spots that are large and unoccupied
 *       4.
 * */
