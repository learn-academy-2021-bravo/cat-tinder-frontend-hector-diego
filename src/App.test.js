it('BeerIndex renders content', () => {
  const beerIndex = shallow(<BeerIndex />)
  expect(beerIndex.text("h2")).toEqual('This is the Index Page')
})