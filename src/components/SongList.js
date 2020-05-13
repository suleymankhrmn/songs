import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component{

    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="card border border-dark mt-3 mb-3" key={song.title}>
                    
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title mr-auto">{song.title}</h5>
                            <a onClick={() => this.props.selectSong(song)} className="btn btn-primary ml-auto">Select</a>
                        </div>
                        
                    </div>
                </div>
            );
        });
    }
    render(){

        // this.props === {songs: state.songs}
     
    return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) =>{
    
    console.log(state);
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong}) (SongList);