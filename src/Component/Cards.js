function Cards({username, address}) {
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://render.fineartamerica.com/images/rendered/default/canvas-print/10/7/mirror/break/images-medium-5/lepidopterology-heather-bonadio-canvas-print.jpg    "
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              {username}
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{address}</div>
          </figcaption>
        </div>
      </figure>
    )
}
export default Cards;