import type { WritingListProps } from '@/lib/types'

export default function Writings({ writings }: WritingListProps) {

  return (
    <ul>
      {writings.map((writing) => (
        <li
          key={writing.id}
          className={`p-6 m-4`}
        >
          <div>
            <div className='text-center font-normal text-lg/6 sm:text-xl/7 md:text-2xl/8 subpixel-antialiased underline'>{writing.title}</div>
          </div>
          <div className={`card shadow-sm rounded-md p-4 mt-2`}>
            <div className="w-full px-4 pt-2 pb-6">
              {writing.body}
            </div>

          </div>
        </li>
      ))}
    </ul>
  );
}
