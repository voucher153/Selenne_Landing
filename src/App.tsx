import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ProductItem } from './components/ProductItem/ProductItem';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { LandingSlice } from './reducers/LandingSlice';
import { AllWork } from './components/AllWork/AllWork';
import { About } from './components/About/About';
import { ContactUs } from './commonComponents/ContactUs/ContactUs';
import { NotFound } from './components/NotFound/NotFound';



export const App = () => {

  const dispatch = useAppDispatch()

  const projectInformationOne = useAppSelector(state => state.landingSlice.projectInformationOne)
  const projectInformationTwo = useAppSelector(state => state.landingSlice.projectInformationTwo)
  const projectInformationThree = useAppSelector(state => state.landingSlice.projectInformationThree)
  const projectInformationFour = useAppSelector(state => state.landingSlice.projectInformationFour)
  const projectInformationFive = useAppSelector(state => state.landingSlice.projectInformationFive)
  const projects = useAppSelector(state => state.landingSlice.projects)

  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(LandingSlice.actions.setPrevLocation(location))
  }, [ location ])

  return (
      <Provider store={store}>
        <div>
          <Header />
          <div className='app-wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/items/project01' element={
                <ProductItem 
                    itemProjects={projectInformationOne.itemProjects}
                    projects={projects}
                    itemGreeting={projectInformationOne.itemGreeting}
                    process={projectInformationOne.process}
                    goal={projectInformationOne.goal}
                  />
                }
              />
              <Route path='/items/project02' element={
                  <ProductItem 
                    itemProjects={projectInformationTwo.itemProjects}
                    projects={projects}
                    itemGreeting={projectInformationTwo.itemGreeting}
                    process={projectInformationTwo.process}
                    goal={projectInformationTwo.goal}
                  />
                } 
              />
              <Route path='/items/project03' element={
                  <ProductItem
                    itemProjects={projectInformationThree.itemProjects}
                    projects={projects}
                    itemGreeting={projectInformationThree.itemGreeting}
                    process={projectInformationThree.process}
                    goal={projectInformationThree.goal}
                  />
                } 
              />
              <Route path='/items/project04' element={
                  <ProductItem
                    itemProjects={projectInformationFour.itemProjects}
                    projects={projects}
                    itemGreeting={projectInformationFour.itemGreeting}
                    process={projectInformationFour.process}
                    goal={projectInformationFour.goal}
                  />
                } 
              />
              <Route path='/items/project05' element={
                  <ProductItem
                    itemProjects={projectInformationFive.itemProjects}
                    projects={projects}
                    itemGreeting={projectInformationFive.itemGreeting}
                    process={projectInformationFive.process}
                    goal={projectInformationFive.goal}
                  />
                }
              />
              <Route path='/work' element={<AllWork />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactUs contactPage={true} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Provider>
  );
}