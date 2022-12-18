 class User {

    //static id1 = 0;
    static id = 0;

    constructor(ma_NummerU,vornameU,nachnameU,passwortU,istChefU, id) {
        this.ma_NummerU = ma_NummerU;
        this.vornameU = vornameU;
        this.nachnameU = nachnameU;
        this.passwortU = passwortU;
        this.istChefU = istChefU;
        //this.id = ++User.counter;
        //this.id1 = ++id1;
        //console.log("vvvvvvvvvvvvvvvvvvvvvvvvv"+this.id1)
        //this._id = User.counter;
        this.id = ++User.id;
        console.log("bin UserInLogt Class User, und this.id"+this.id);
    }

    //-------------------------
    getID() {
        console.log(this.id);
        return this.id;
    }

    get Id() {
        return this._id;
    }
    static get counter() {
        User._counter = (User._counter || 0) + 1;
        return User._counter;
    }
    //-------------------------
    getMa_NummerU() {
        return this.ma_NummerU;
    }
    setMa_NummerU(ma_NummerU) {
        this.ma_NummerU = ma_NummerU;
    }
    getVornameU() {
        return this.vornameU;
    }
    setVornameU(vornameU) {
        this.vornameU = vornameU;
    }
     getNachnameU() {
        return this.nachnameU;
    }
    setNachnameU(nachnameU) {
        this.nachnameU = nachnameU;
    }
    getPasswortU() {
        return this.passwortU;
    }
    setPasswortU(passwortU) {
        this.passwortU = passwortU;
    }
    getIstChefU() {
        return this.istChefU;
    }
    setIstChefU(istChefU) {
        this.istChefU = istChefU;
    }

}
//export default User.getNachnameU();
//export * from 'UserInLoggt2';
