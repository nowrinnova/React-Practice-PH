import { Link } from "react-router-dom";
export default function User({user}) {
  const {name}=user
  return (
    <div >
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          <Link to={`/users/${user.id}`} className="text-yellow-300">Show more details</Link>
        </div>
      </div>
    </div>
  );
}
