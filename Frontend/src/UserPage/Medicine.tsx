import React, { useState } from "react";

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  expiry: string;
}

const Medicines: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
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

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Medicine Management</h1>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Medicine
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price (Rs)</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Expiry</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMedicines.map((med) => (
              <tr key={med.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{med.name}</td>
                <td className="px-4 py-2">{med.category}</td>
                <td className="px-4 py-2">{med.price}</td>
                <td className="px-4 py-2">{med.stock}</td>
                <td className="px-4 py-2">{med.expiry}</td>

                <td className="px-4 py-2">
                  {med.stock > 50 ? (
                    <span className="text-green-600 font-semibold">
                      In Stock
                    </span>
                  ) : med.stock > 0 ? (
                    <span className="text-yellow-600 font-semibold">Low</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Out</span>
                  )}
                </td>

                <td className="px-4 py-2 space-x-2">
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

        {filteredMedicines.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No medicines found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;
