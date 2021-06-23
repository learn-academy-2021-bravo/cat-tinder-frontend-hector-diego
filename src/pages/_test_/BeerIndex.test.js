import React from 'react' 


// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

 // Imports in the component we are going to be testing. 
import BeerIndex from '../BeerIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 

it('BeerIndex renders content', () => {
  const beerIndex = shallow(<BeerIndex />)
  expect(beerIndex.text("h2")).toEqual('This is the Index Page')
})