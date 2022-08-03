import React from 'react'
import './SearchPage.css'
import {useStateValue} from"../StateProvider";
import useGoogleSearch from './useGoogleSearch';
import {link} from "react-router-dom";
import search from './search';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
   // const {data} = useGoogleSearch(term);
    const data = Response

    console.log(data)
  return (
    <div className='searchPage'>
     <div className='searchPage_header'>
     <Link to='/'>
      <img className='searchPage_logo' src="https://www.gooogle.com/images/branding/googlelogo/2x/goodlelogo_color_272x92dp.png" alt="" />
     </Link>
     </div>
     <div className='searchPage_headerBody'>
      <Search hideButtons/>
     </div>
     <div className='searchPage_options'>
        <div className='searchPage_optionsLeft'>
          <div className='searchPage_option'>
            <SearchIcon/>
          <link to='/all'>All</link>
          </div>
          <div className='searchPage_option'>
          <DescriptionIcon/>
          <link to='/news'>News</link>
          </div>
          <div className='searchPage_option'>
          <ImageIcon/>
          <link to='/images'>Images</link>
          </div>
          <div className='searchPage_option'>
          <LocalOfferIcon/>
          <link to='/shopping'>Shopping</link>
          </div>
          <div className='searchPage_option'>
          <RoomIcon/>
          <link to='/maps'>Maps</link>
          </div>
          <div className='searchPage_option'>
          <MoreVertIcon/>
          <link to='/more'>More</link>
          </div>
        </div>
        <div className='searchPage_optionsRight'>
          <div className='searchPage_option'>
            <link to='/settings'>Settings</link>
          </div>
          <div className='searchPage_option'>
            <link to='/tools'>Tools</link>
          </div>
        </div>
     </div>
     {term && (
     <div className='searchPage_results'>
     <p className='searchPage_resultCount'>
      About({data?.searchInformation.formattedSearchTime} seconds)
      for {term}
     </p>
     {data?.items.map(item =>(
      <div className='searchPage_result'>
        <a href={item.link}>
        {item.displayLink}
        <a/>
        
        <a className='searchPage_resultTitle' href={item.link}>
          <h2>{item.title}</h2>
        </a>
        <p className='searchPage_resultSnippet'>
        </p>
      </div>
     ))}
    </div>
     )}
    </div>
  )
}
