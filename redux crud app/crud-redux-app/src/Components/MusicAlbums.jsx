import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { deleteMusicRecord, getMusicRecord } from "../Redux/AppReducer/Action";




const MusicAlbums = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const genre = searchParams.getAll("genre");

      const queryParams = {
        params: {
          genre: genre,
          _sort: searchParams.get("sortBy") && "year",
          _order: searchParams.get("sortBy"),
        },
      };
      dispatch(getMusicRecord(queryParams));
    }
  }, [location]);

  const handleDelete =(id)=>{
    if(window.confirm("Are You Sure")){
      dispatch(deleteMusicRecord(id))
      navigate("./")
    }
  }

  return (
    <>
    <button onClick={()=> navigate("/addmusic")} >Add Music Album</button>
      {musicRecords.length > 0 &&
        musicRecords.map((el) => {
          return (
            <div key={el.id} style={{border:"1px solid lightgrey",margin:"5px"}}>
              <div>
                <img src={el.img} alt={el.name} />
              </div>
              <div>{el.name}</div>
              <div>{el.genre}</div>
              <div>{el.year}</div>
              <button  onClick={()=> handleDelete(el.id)} >Delete</button>
              <Link to={`/music/${el.id}/edit`}> <button >Edit</button></Link>
            </div>
          );
        })}
    </>
  );
};

export default MusicAlbums;
