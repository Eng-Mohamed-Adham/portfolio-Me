




const usepro = (refViews,srcViews,altViews,refTags1,Tagsone,refTags2,TagsTow,head,content1,refP1,contentP1) => {

    return (
        <div className=" ">
            <article className="article-card">
                <div className="article-views">
                    <a href={refViews}>
                        <img src={srcViews} alt={altViews} />
                    </a>
                </div>

                <div className="article-text">

                    <header className="article-head">
                        <div className="tags">
                            <a href={refTags1} alt="">{Tagsone}</a>
                            <a href={refTags2} alt="">{TagsTow}</a>
                        </div>
                    </header>
                    <h2>
                        <a href={refTags2}>
                                {head}
                        </a>
                    </h2>
                    <div className="card-content" >
                        <p>
                            {content1}
                            <a href={refP1}>
                                {contentP1}...
                            </a>
                          

                        </p>

                    </div>
                </div>
            </article>
        </div>
    );
}
 
export default usepro;