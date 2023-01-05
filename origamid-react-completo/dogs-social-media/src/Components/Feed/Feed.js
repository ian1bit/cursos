import React from "react"
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from 'prop-types'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const[pages, setPages] = React.useState([1])
  const [infinte, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    const infinteScroll = () => {
      if (infinte) {       
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * .75 && !wait) {
          setPages((pages) => (
            [...pages, pages.length + 1]
          ))
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infinteScroll)
    window.addEventListener('scroll', infinteScroll)

    return () => {
      window.removeEventListener('wheel', infinteScroll)
      window.removeEventListener('scroll', infinteScroll)
    }
  }, [infinte])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map(page => (
      <FeedPhotos 
        key={page} 
        user={user} 
        page={page} 
        setModalPhoto={setModalPhoto} 
        setInfinite={setInfinite}
      />
      ))}
    </div>
  )
};

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired, 
    PropTypes.number.isRequired
  ]),
}

export default Feed
