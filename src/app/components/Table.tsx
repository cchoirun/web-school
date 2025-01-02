import React from 'react';

interface FeeItem {
  uraian: string;
  nominal: number;
}

interface FeeTableProps {
  fees: FeeItem[];
  title?: string;
  className?: string;
}

const FeeTable: React.FC<FeeTableProps> = ({ fees, title, className = '' }) => {
  // Function to format currency in Indonesian Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate total
  const total = fees.reduce((sum, item) => sum + item.nominal, 0);

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      )}
      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                URAIAN
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 uppercase">
                NOMINAL
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fees.map((fee, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {fee.uraian}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {formatRupiah(fee.nominal)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-bold">
              <td className="px-6 py-4 text-sm text-gray-900">
                Total
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {formatRupiah(total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeTable;