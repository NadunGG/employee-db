'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          empNo: 'EMP001',
          empName: 'Nishan Sathsara',
          empAddressLine1: 'No. 23/E,',
          empAddressLine2: 'New Street,',
          empAddressLine3: 'Colombo 06.',
          empDateOfJoin: new Date(2015,11,5),
          empStatus: true,
          empImage: 'img23.jpg',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          empNo: 'EMP002',
          empName: 'Duvindu Nirmal',
          empAddressLine1: 'No. 34/G,',
          empAddressLine2: '3rd Lane,',
          empAddressLine3: 'Galwala Road, Embuldeniya.',
          empDateOfJoin: new Date(2014,5,6),
          empStatus: true,
          empImage: 'img05.jpg',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          empNo: 'EMP003',
          empName: 'Sandun Prasanna',
          empAddressLine1: 'No. 23/E',
          empAddressLine2: 'New Street',
          empAddressLine3: 'Colombo 06',
          empDateOfJoin: new Date(2015,11,5),
          empStatus: false,
          empImage: 'img15.jpg',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          empNo: 'EMP004',
          empName: 'Lavan Gunawardana',
          empAddressLine1: 'No. 2/G-2,',
          empAddressLine2: 'New Housing Complex,',
          empAddressLine3: 'Jayawadanagama, Battaramulla.',
          empDateOfJoin: new Date(2018,2,14),
          empStatus: true,
          empImage: 'img21.jpg',
          createdAt : new Date(),
          updatedAt : new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};
