import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBlQAb6fmePiHv4dLcB9wdHVaUkY76BkNg",
    authDomain: "firbodden-lands-api.firebaseapp.com",
    databaseURL: "https://forbidden-lands-api.firebaseio.com/",
    storageBucket: "forbidden-lands-api.appspot.com"
};

firebase.initializeApp(config);

export class FirebaseDatabase {

    db: firebase.database.Database;
    ref: firebase.database.Reference;

    constructor() {
        this.db = firebase.database();
        this.ref = this.db.ref("funktioner");
    }

    async getAllKeepData(array: any) {
        this.ref = this.db.ref("funktioner");
        await this.ref.once("value", function(snapshot: any) {
            array.push(snapshot);
        });

        this.ref = this.db.ref("tjänare");
        await this.ref.once("value", function(snapshot: any) {
            array.push(snapshot);
        });
    }

    async getAllFunctions(array: any) {
        this.ref = this.db.ref("funktioner");
        await this.ref.once("value", function(snapshot: any) {
            array.push(snapshot);
        });
    }

    async getAllServants(array: any) {
        this.ref = this.db.ref("tjänare");
        await this.ref.once("value", function(snapshot: any) {
            array.push(snapshot);
        });
    }
}