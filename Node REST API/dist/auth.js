"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oktaAuth = void 0;
const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: '0oa631z3ysAwbkYJS5d7',
    issuer: 'https://dev-60800704.okta.com/oauth2/default'
});
function oktaAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.token;
            if (!token) {
                return res.status(401).send('Not Authorized');
            }
            const jwt = yield oktaJwtVerifier.verifyAccessToken(token, 'api://default');
            // @ts-ignore
            req.user = {
                uid: jwt.claims.uid,
                email: jwt.claims.sub
            };
            next();
        }
        catch (err) {
            return res.status(401).send(err.message);
        }
    });
}
exports.oktaAuth = oktaAuth;

