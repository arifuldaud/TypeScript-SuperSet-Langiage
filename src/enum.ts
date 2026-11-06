

enum trainClass  {
    shovon = 500,
    singdha = 1000,
    Ac =  3000,
}
console.log(trainClass)

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(Days.Sunday);
console.log(Days.Monday);
console.log(Days.Tuesday);

enum statu {
    pending = 1,
    processing =2,
    completed = 3
}

console.log(statu.pending)
console.log(statu.completed)

enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

console.log(Colors.Red);
console.log(Colors.Green);
console.log(Colors.Blue);

// Real Life example 

enum userRole {
    admin = "Admin",
    editor = "Editor",
    user = "User"
}

let myRole:userRole = userRole.admin

console.log(myRole);

enum MovieStatus {
    Upcoming = "UPCOMING",
    Released = "RELEASED",
    Cancelled = "CANCELLED"
}

let movieStatus: MovieStatus = MovieStatus.Released;

console.log(movieStatus);