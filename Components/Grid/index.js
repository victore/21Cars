import React, { useState } from "react";
import Image from "next/image";

const initialMessagesState = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const Grid = (props) => {
  const [showMessage, SetShowMessage] = useState(initialMessagesState);

  const handleOnClick = (id) => {
    console.log(showMessage[id]);
    const tmpShowMessage = [...initialMessagesState];
    tmpShowMessage[id] = true;
    console.log(tmpShowMessage[id]);
    SetShowMessage(tmpShowMessage);
  };

  return (
    <div>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='border-2 border-gray-200 rounded-lg p-4'>
              <div className='grid grid-cols-3 gap-4'>
                {props.cars.map((car, id) => (
                  <div key={car.id}>
                    <h1>
                      {car.name}{" "}
                      {showMessage[id] === true && (
                        <span className='text-indigo-600'>
                          Enjoy the time with this amazing car!
                        </span>
                      )}
                    </h1>
                    <Image
                      src={car.image}
                      alt={`car ${car.id}`}
                      width='300px'
                      height='180px'
                    />
                    <p>{car.spec}</p>
                    <button
                      type='button'
                      onClick={() => handleOnClick(id)}
                      className='inline-flex items-center px-2 py-1 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      {showMessage[id] === true && (
                        <svg
                          className='-ml-1 mr-2 h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      )}
                      Rent this car!
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Grid;
