import React, { useState } from "react";

const initialArtworks = [
  {
    id: 1,
    title: "Abstract Sunrise",
    artist: "Sanjana P",
    price: "$420",
    img: "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
  },
  {
    id: 2,
    title: "Coastal Calm",
    artist: "L. Rivera",
    price: "$320",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
  },
  {
    id: 3,
    title: "Modern Lines",
    artist: "A. Chen",
    price: "$290",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
  },
  {
    id: 4,
    title: "Forest Whisper",
    artist: "M. Diaz",
    price: "$360",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
  },
  {
    id: 5,
    title: "City Rhythm",
    artist: "K. Osei",
    price: "$480",
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
  },
  {
    id: 6,
    title: "Golden Hour",
    artist: "S. Patel",
    price: "$540",
    img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    isPublished: true,
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
      isPublished: false, // save new posts as drafts by default
    };
    setArtworks([newArt, ...artworks]);
    setTitle("");
    setArtist("");
    setPrice("");
    setFilePreview(null);
  }

  // admin mode: show draft manager when `?admin=1` is present in the URL
  const adminMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("admin") === "1";

  function publishArtwork(id) {
    setArtworks((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isPublished: true } : a))
    );
  }

  function deleteArtwork(id) {
    setArtworks((prev) => prev.filter((a) => a.id !== id));
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
        {artworks
          .filter((a) => a.isPublished)
          .map((art) => (
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

      {adminMode && (
        <section className="drafts">
          <h2>Drafts (admin)</h2>
          {artworks.filter((a) => !a.isPublished).length === 0 && (
            <p>No drafts</p>
          )}
          <div className="draft-list">
            {artworks
              .filter((a) => !a.isPublished)
              .map((draft) => (
                <article key={draft.id} className="card draft">
                  <img src={draft.img} alt={draft.title} />
                  <div className="card-body">
                    <div className="card-title">{draft.title}</div>
                    <div className="card-sub">by {draft.artist}</div>
                    <div style={{ flex: 1 }} />
                    <div className="card-footer">
                      <div className="price">{draft.price}</div>
                      <button
                        className="buy"
                        onClick={() => publishArtwork(draft.id)}
                      >
                        Publish
                      </button>
                      <button
                        className="buy"
                        onClick={() => deleteArtwork(draft.id)}
                        style={{ marginLeft: 8, background: "#c33" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      )}
    </>
  );
}
