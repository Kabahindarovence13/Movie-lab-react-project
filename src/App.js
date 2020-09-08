import React, { Component } from "react";
import './index.css';

//import movies from './movies';
class App extends Component {
    state = {
        success: false,
        statusCode: 0,
        data: [],
        _id: "",
        title: "",
        description: "",
        releaseDate: "",
        genre: "",
        imageUrl: "",
        // createdAt:"",
        // updatedAt:"",
        // __v:""

    };
    //calling on the API
    async componentDidMount() {
        const url = "https://movi-lib.herokuapp.com/api/v1/movies";
        const resp = await fetch(url);
        const movie = await resp.json();
        this.setState({ data: movie.data });
        console.log(movie.data);

    }


    render() {
        return (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridAutoRows: "auto",
                gridGap: "1rem",
                border: "2px solid maroon",
                gridColumnGap: "50px",
                borderRadius: "4px",
                padding: "1rem",
                alignItems: "center"
            }
            }>
                <p style={{ color: "red", fontSize: "40px",marginBlockStart:"auto",fontFamily: "tahoma" }}>Mymovielib</p>

                <hr />
                <div>
                    {this.state.data.map(data => (
                        <div style={{
                            display: "grid",
                            // gridTemplateColumns: "repeat(5, 1fr max-content)",
                            // gridTemplateRows: "repeat(5,1fr)",
                            gridAutoRows: "auto",
                            justifySelf: "center",
                            marginBottom: "30px;",
                            GridAutoColumns: "auto",
                            gridGap: "1rem",
                            border: "1px solid maroon",
                            gridColumnGap: "50px",
                            gridRowGap: "50px",
                            borderRadius: "4px",
                            padding: ".5rem",
                            gridTemplateColumns: "repeat(5, 150px)",
                            gridTemplateRows: "repeat(5, 100px)"

                        }}
                            key={data._id} >{data.title}
                            <div>{data.description}</div>
                            <div>{data.genre}</div>
                            <img alt="movieimage" width="200px" length="200" src={data.imageUrl} />
                            {/* <div>{data.createdAt}</div>
                        <div>{data.updatedAt}</div>
                        <div>{data.__v}</div> */}


                            <div>{data.director}</div>


                        </div>

                    ))}


                </div>


            </div>
        );
    }

}
export default App;