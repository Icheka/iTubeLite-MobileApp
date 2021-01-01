import axios from 'axios';

import { SignUp, SignIn } from '../services/endpoints';

export default class User {
    constructor() {
        data = '';
    }

    createUser(payload) {
        payload = this.genFormData(payload);

        axios[SignUp.method](SignUp.uri, payload)
            .then(res => this.data = res.data)
            .catch(err => this.data = err.response);
    }

    signIn(payload) {
        payload = this.genFormData(payload);

        axios[SignIn.method](SignIn.uri, payload)
            .then(res => this.data = res.data)
            .catch(err => this.data = err.response);
    }

    genFormData(payload) {
        const X = new FormData();
        Object.keys(payload).forEach(param => {
            X.append(param, payload[param]);
        });

        return X;
    }
}