import React from 'react'
import styled from 'styled-components'
import FilterSort from '../Components/FilterSort'
import MusicAlbums from '../Components/MusicAlbums'

const MusicRecords = () => {
  return (
    <Wrapper color='green'>
      <WrapperFilterSort>

      <FilterSort/>
      </WrapperFilterSort>


    <WrapperMusicAlbum>

     { <MusicAlbums/>}
    </WrapperMusicAlbum>

    </Wrapper>
  )
}

const Wrapper = styled.div`
border: 1px solid black;
display: flex;
min-height: 100vh
`

const WrapperFilterSort = styled.div`
border: 1px solid red;
display: flex;
width: 200px;

justify-content: flex-start;
align-items: flex-start;
`

const WrapperMusicAlbum = styled.div`
border: 1px solid blue;
display : grid;
grid-template-columns : repeat(auto-fit, minmax(250px, max-content));
justify-content: center;
align-items:center;
grid-gap: 30px;
width: 100%
`
export default MusicRecords
