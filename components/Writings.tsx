import type { WritingListProps } from '@/lib/types'

export default function Writings({ writings }: WritingListProps) {

  return (
    <ul className="px-6">
      {writings.map((writing) => (
        <li
          key={writing.id}
          className={`p-6 m-4`}
        >
          <div className={`card shadow-sm rounded-md p-4 mt-2`}>
            <div className='text-center font-normal text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased underline underline-offset-2 decoration-1'>{writing.title}</div>

            <div>
              <div className="w-full font-light text-sm/3 sm:text-base/4 md:text-lg/5 subpixel-antialiased p-2">
                {writing.body}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
