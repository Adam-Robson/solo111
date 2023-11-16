import type { WritingListProps } from '@/lib/types'

export default function Writings({ writings }: WritingListProps) {

  return (
    <ul>
      {writings.map((writing) => (
        <li
          key={writing.id}
          className={`p-6 m-4`}
        >
          <div className={`card shadow-sm rounded-md p-4 mt-2`}>
            <div className='text-center font-normal text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased underline underline-offset-2 decoration-1'>{writing.title}</div>

            <div>
              <div className="w-full px-4 pt-2 pb-6">
                {writing.body}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
