//TODO: Mejorar tabla
export default function Table({ title = '' }) {
  return (
    <>
 <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-neutral-600 text-sm">
    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium ">Name</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium ">Date of Birth</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium ">Role</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium ">Salary</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-neutral-800 text-white">
      <tr class="odd:bg-neutral-800">
        <td class="whitespace-nowrap px-4 py-2 font-medium">John Doe</td>
        <td class="whitespace-nowrap px-4 py-2">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2">Web Developer</td>
        <td class="whitespace-nowrap px-4 py-2">$120,000</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium">Jane Doe</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">$100,000</td>
      </tr>

      <tr class="odd:bg-neutral-800">
        <td class="whitespace-nowrap px-4 py-2 text-white font-medium">Gary Barlow</td>
        <td class="whitespace-nowrap px-4 py-2 text-white ">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-white ">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-white ">$20,000</td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}
