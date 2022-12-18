
const setNameEnte = () => {
    return "Enssste"
}
/*
const setNameEnte2(param1){
    this.param1 = param1;
}
*/
const setNameEnte3 = ()=>{
    return param1;
}

const getNameEnte = () => {
    return setNameEnte();
};

const getLocationEnte = () => {
    return 'Munich';
};

export default {getNameEnte, getLocationEnte, setNameEnte3};
