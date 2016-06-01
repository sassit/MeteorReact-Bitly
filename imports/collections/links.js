/**
 * Created by tsassi on 01/06/2016.
 */
import {Mongo} from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';
import MD5 from 'crypto-js/md5';

Meteor.methods({
    'links.insert': function (url) {
        check(url, Match.Where(url => validUrl.isUri(url)));
        const token = MD5(token).toString().slice(-5);
        Links.insert({url, token, clicks: 0});
    }
});

export const Links = new Mongo.Collection('links');
