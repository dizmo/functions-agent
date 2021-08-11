import { expect } from 'chai';
import { agent } from '../lib';

describe('agent', () => {
    it('should exist', () => {
        expect(agent).to.not.be.an('undefined');
    });
    it('should be a function', () => {
        expect(agent).to.be.a('function');
    });
});

describe('agent', () => {
    it('should return null', () => {
        expect(agent(/xxx/)).to.equal(null);
    });
});

describe('agent', () => {
    before(() => {
        global.navigator = {
            userAgent: 'xxx'
        } as Navigator;
    });
    it('should return regex match array', () => {
        const matched = agent(/xxx/);
        expect(matched).to.be.an('Array');
        expect(matched?.length).to.be.greaterThan(0);
        if (matched?.length) {
            expect(matched[0]).to.eq('xxx');
        }
        expect(matched?.index).to.eq(0);
        expect(matched?.input).to.eq('xxx');
        expect(matched?.groups).to.eq(undefined);
    });
});
