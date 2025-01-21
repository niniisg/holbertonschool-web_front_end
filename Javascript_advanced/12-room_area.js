const roomDimensions = {
    width: 50,
    length: 100,
    getArea(){
        return this.width * this.length;
    }
};

const getArea = roomDimensions.getArea;

const boundGetArea = getArea.bind(roomDimensions);
