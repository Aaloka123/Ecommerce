import React, { useState } from "react";
import Header from "../UserComponent/Header";
import Footer from "../UserComponent/Footer";

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  expiry: string;
}

const Medicines: React.FC = () => {
  const [medicines] = useState<Medicine[]>([
    {
      id: 1,
      name: "Paracetamol",
      category: "Tablet",
      price: 20,
      stock: 120,
      expiry: "2026-03-10",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Capsule",
      price: 35,
      stock: 40,
      expiry: "2025-11-05",
    },
    {
      id: 3,
      name: "Cough Syrup",
      category: "Syrup",
      price: 90,
      stock: 15,
      expiry: "2024-08-20",
    },
  ]);

  const [search, setSearch] = useState("");

  const filtered = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalStock = medicines.reduce((sum, m) => sum + m.stock, 0);
  const lowStock = medicines.filter((m) => m.stock < 50).length;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Medicines</h1>
            <p className="text-gray-500">
              Manage and monitor pharmacy medicines
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow">
            + Add Medicine
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Medicines</p>
            <h2 className="text-2xl font-bold">{medicines.length}</h2>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Stock</p>
            <h2 className="text-2xl font-bold">{totalStock}</h2>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Low Stock Alerts</p>
            <h2 className="text-2xl font-bold text-yellow-600">{lowStock}</h2>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white shadow rounded-lg p-4">
          <input
            type="text"
            placeholder="Search by medicine name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/2"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Expiry</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((med) => (
                <tr key={med.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{med.name}</td>
                  <td className="px-4 py-3">{med.category}</td>
                  <td className="px-4 py-3">Rs {med.price}</td>
                  <td className="px-4 py-3">{med.stock}</td>
                  <td className="px-4 py-3">{med.expiry}</td>

                  <td className="px-4 py-3">
                    {med.stock > 50 && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        In Stock
                      </span>
                    )}
                    {med.stock <= 50 && med.stock > 0 && (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                        Low
                      </span>
                    )}
                    {med.stock === 0 && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                        Out
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 space-x-3">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No medicines found.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Medicines;
