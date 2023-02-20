import React from 'react'
import './Banner.css'

const Banner = () => {

    const truncate = (string, n) =>
    {
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    }
  return (
    <>
    <header className="banner"
    style={{
        backgroundImage : `url("https://wallpaper.dog/large/990949.jpg")`,
        backgroundSize : "cover",
        backgroundPosition : "center center"
    }}
    >
        <div className="bannerContents">
            <h1>Movie Name</h1>
            <div className="bannerButtons">
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
            </div>
            <div className="bannerDescription">
                {truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem illo in, odio magnam eos accusantium fuga ut cupiditate reiciendis praesentium, distinctio voluptatum dolorum impedit, saepe nisi! Beatae, quas doloremque.
                Quibusdam provident deserunt consequatur numquam dolore, quisquam, laboriosam officiis excepturi ea ab rem.`,200)}
            </div>
        </div>

        <div className="bannerFadeBottom"></div>
    </header>
    </>
  )
}

export default Banner;