import React from 'react'
import {connect} from 'react-redux'
import Album from './Album'
import {fetchNewAlbums, thunkToDeleteAlbum} from '../store/allNewAlbums'
import ConnectedAdminNewAlbum from './admin-new-album'
import ConnectedAdminUpdateAlbum from './admin-update-album'

export class AdminView extends React.Component {
  constructor() {
    super()
    this.state = {
      showAddForm: false,
      showEditForm: false,
      currentlyEditingAlbum: undefined,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.fetchNewAlbums()
  }

  handleClick(form, currentlyEditingAlbum) {
    return this.setState({
      [form]: !this.state[form],
      currentlyEditingAlbum: currentlyEditingAlbum,
    })
  }

  async handleDelete(productId) {
    await this.props.deleteAlbum(productId)
    await this.props.fetchNewAlbums()
    this.setState()
  }

  render() {
    return (
      <div className="allAlbums">
        <h1>All Albums</h1>
        <div id="newAlbumButton">
          <button
            type="button"
            id="add-album"
            onClick={() => this.handleClick('showAddForm')}
          >
            Add Album
          </button>
          {this.state.showAddForm ? (
            <ConnectedAdminNewAlbum
              handleClick={this.handleClick}
              albums={this.props.albums}
            />
          ) : null}
        </div>

        <div className="albumsList">
          {this.props.albums.map((album) => {
            return (
              <div key={album.id}>
                <Album
                  key={album.id}
                  id={album.id}
                  name={album.title}
                  band={album.artistName}
                  imageUrl={album.imageUrl}
                  price={album.price}
                  songList={album.songList}
                  releaseYear={album.releaseYear}
                  category={album.category}
                  adminView={true}
                />

                <div id="editAlbumButton">
                  <button
                    type="button"
                    id="edit-album"
                    onClick={() => this.handleClick('showEditForm', album.id)}
                  >
                    Edit Album
                  </button>
                  {this.state.showEditForm &&
                  this.state.currentlyEditingAlbum === album.id ? (
                    <ConnectedAdminUpdateAlbum
                      handleClick={this.handleClick}
                      album={album}
                    />
                  ) : null}
                </div>

                <button
                  type="button"
                  id="delete"
                  name="deleteAlbum"
                  onClick={() => this.handleDelete(album.id)}
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    ) //return
  } //render
} //class

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    album: state.album,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewAlbums: () => dispatch(fetchNewAlbums()),
    deleteAlbum: (productId) => dispatch(thunkToDeleteAlbum(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminView)
