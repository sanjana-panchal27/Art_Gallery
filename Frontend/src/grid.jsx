import React, { useState } from "react";

const initialArtworks = [
  {
    id: 1,
    title: "Abstract Sunrise",
    artist: "Sanjana P",
    price: "$420",
    img: "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Coastal Calm",
    artist: "L. Rivera",
    price: "$320",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Modern Lines",
    artist: "A. Chen",
    price: "$290",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Forest Whisper",
    artist: "M. Diaz",
    price: "$360",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "City Rhythm",
    artist: "K. Osei",
    price: "$480",
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Golden Hour",
    artist: "S. Patel",
    price: "$540",
    img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Grid() {
  const [artworks, setArtworks] = useState(initialArtworks);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return setFilePreview(null);
    const reader = new FileReader();
    reader.onload = () => setFilePreview(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !artist || !price || !filePreview)
      return alert("Please fill all fields and choose an image");
    const newArt = {
      id: Date.now(),
      title,
      artist,
      price: price.startsWith("$") ? price : `$${price}`,
      img: filePreview,
    };
    setArtworks([newArt, ...artworks]);
    setTitle("");
    setArtist("");
    setPrice("");
    setFilePreview(null);
  }

  return (
    <>
      <section className="hero">
        <h1>Welcome to Art Gallery</h1>
        <p>Discover original artworks and prints from curated artists.</p>
      </section>

      <section className="upload-form">
        <form onSubmit={handleSubmit}>
          <div className="upload-row">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Artist"
              required
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price (e.g. 200)"
              required
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="upload-actions">
            {filePreview && (
              <img className="preview" src={filePreview} alt="preview" />
            )}
            <button className="buy" type="submit">
              Post Artwork
            </button>
          </div>
        </form>
      </section>

      <section className="art-grid">
        {artworks.map((art) => (
          <article key={art.id} className="card">
            <img src={art.img} alt={art.title} />
            <div className="card-body">
              <div className="card-title">{art.title}</div>
              <div className="card-sub">by {art.artist}</div>
              <div style={{ flex: 1 }} />
              <div className="card-footer">
                <div className="price">{art.price}</div>
                <button className="buy">Buy</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
