import {endpoint, getPosition} from './utils.js'

test('create endpoint string from city', () => {
    expect(endpoint('  new york')).toBe(`?by_city=new_york&per_page=20`);
});

test('create endpoint string from location', () => {
    expect(endpoint({lat: 50.5, lng: -2.3})).toBe(`?by_dist=50.5,-2.3&per_page=20`)
})

//-----getPosition-------//
test('should return location', async() => {
    const data = await getPosition();
    expect(data).toStrictEqual({
        
    });
})