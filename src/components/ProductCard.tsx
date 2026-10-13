import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product._id}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-slate-100">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">No image</div>
        )}
      </div>

      <div className="p-4">
        <span className="inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
          {product.category}
        </span>
        <h3 className="mt-2 truncate font-semibold text-slate-900">{product.name}</h3>
        {product.description && (
          <p className="mt-1 line-clamp-2 text-sm text-slate-500">{product.description}</p>
        )}
        <p className="mt-3 text-lg font-bold text-slate-900">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}