import React, { useState } from 'react'
import { axios } from '../../lib'

// eslint-disable-next-line
export default () => {
  const [title, setTitle] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    // create a new post by submitting request to posts service
    await axios.post('/posts/create', { title })

    // reset form
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
