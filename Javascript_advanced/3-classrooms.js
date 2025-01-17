function creatClassRoom(numberOfStudents) {
    function studentSeat(seat){
        return function() {
            return seat;;
        }
    }
    const student = [];

    for (let i = 0; i < numberOfStudents; i++){
        studentSeat.push(studentSeat(i + 1));
    }
    return students;

    }  
    const classRoom = createClassRoom(10);
