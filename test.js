// const Modbus = require('jsmodbus');
// const net = require('net');

// // ข้อมูลการเชื่อมต่อ
// const host = '192.168.10.1'; // IP ของ WD PRO receiver
// const port = 502; // พอร์ตที่ใช้สำหรับ Modbus/TCP

// // สร้าง socket connection
// const socket = new net.Socket();
// const options = {
//     host: host,
//     port: port
// };

// // สร้าง Modbus TCP client
// const client = new Modbus.client.TCP(socket);

// // เชื่อมต่อไปยัง WD PRO receiver
// socket.connect(options);

// // ฟังก์ชันสำหรับดึงข้อมูลจาก registers
// function readRegisters() {
//     client.readHoldingRegisters(4, 3) // ที่อยู่เริ่มต้นที่ 4, อ่าน 3 registers
//         .then((response) => {
//             const data = response.response._body.values;
//             console.log('Data received:', data);

//             // ตรวจสอบสถานะของไฟแต่ละสี
//             const redLightStatus = data[0]; // ค่าสถานะของไฟสีแดง
//             const yellowLightStatus = data[1]; // ค่าสถานะของไฟสีเหลือง
//             const greenLightStatus = data[2]; // ค่าสถานะของไฟสีเขียว

//             // แสดงสถานะไฟ
//             console.log('Red Light Status:', redLightStatus ? 'ON' : 'OFF');
//             console.log('Yellow Light Status:', yellowLightStatus ? 'ON' : 'OFF');
//             console.log('Green Light Status:', greenLightStatus ? 'ON' : 'OFF');
//         })
//         .catch((err) => {
//             console.error('Error reading registers:', err);
//         });
// }

// // เมื่อเชื่อมต่อสำเร็จ
// socket.on('connect', () => {
//     console.log('Connected to the Modbus server');

//     // เรียกใช้ฟังก์ชัน readRegisters ทุก ๆ 1 วินาที
//     setInterval(readRegisters, 1000); // 1000ms = 1 วินาที
// });

// // จัดการข้อผิดพลาดการเชื่อมต่อ
// socket.on('error', (err) => {
//     console.error('Connection error:', err.message);
// });

// // ปิดการเชื่อมต่อเมื่อสำเร็จ
// socket.on('close', () => {
//     console.log('Connection closed');
// });
// const Modbus = require('jsmodbus');
// const net = require('net');

// // ข้อมูลการเชื่อมต่อ
// const host = '192.168.10.1'; // IP ของ WD PRO receiver
// const port = 502; // พอร์ตที่ใช้สำหรับ Modbus/TCP

// // สร้าง socket connection
// const socket = new net.Socket();
// const options = {
//     host: host,
//     port: port
// };

// // สร้าง Modbus TCP client
// const client = new Modbus.client.TCP(socket);

// // เชื่อมต่อไปยัง WD PRO receiver
// socket.connect(options);

// // ฟังก์ชันสำหรับดึง MAC Address
// function readMACAddress() {
//     // อ่านข้อมูลจาก Holding Registers (ตัวอย่าง: Address 0-3 สำหรับ MAC Address)
//     client.readHoldingRegisters(0, 4) // อ่าน 4 registers ที่ Address 0 (สำหรับ MAC Address)
//         .then((response) => {
//             const macBytes = response.response._body.values;
//             // แปลง MAC Address จาก byte array เป็น string
//             const macAddress = macBytes.map(byte => byte.toString(16).padStart(2, '0')).join(':');
//             console.log('MAC Address:', macAddress);
//         })
//         .catch((err) => {
//             console.error('Error reading MAC Address:', err);
//         });
// }

// // ฟังก์ชันสำหรับดึงสถานะของไฟ
// function readLightStatus() {
//     client.readHoldingRegisters(4, 3) // ที่อยู่เริ่มต้นที่ 4, อ่าน 3 registers (สำหรับไฟแดง, เหลือง, เขียว)
//         .then((response) => {
//             const data = response.response._body.values;
//             console.log('Data received:', data);

//             // ตรวจสอบสถานะของไฟแต่ละสี
//             const redLightStatus = data[0]; // ค่าสถานะของไฟสีแดง
//             const yellowLightStatus = data[1]; // ค่าสถานะของไฟสีเหลือง
//             const greenLightStatus = data[2]; // ค่าสถานะของไฟสีเขียว

//             // แสดงสถานะไฟ
//             console.log('Red Light Status:', redLightStatus ? 'ON' : 'OFF');
//             console.log('Yellow Light Status:', yellowLightStatus ? 'ON' : 'OFF');
//             console.log('Green Light Status:', greenLightStatus ? 'ON' : 'OFF');
//         })
//         .catch((err) => {
//             console.error('Error reading registers:', err);
//         });
// }

// // เมื่อเชื่อมต่อสำเร็จ
// socket.on('connect', () => {
//     console.log('Connected to the Modbus server');

//     // เรียกใช้ฟังก์ชันดึง MAC Address หนึ่งครั้ง
//     readMACAddress();

//     // เรียกใช้ฟังก์ชัน readLightStatus ทุก ๆ 1 วินาที
//     setInterval(readLightStatus, 1000); // 1000ms = 1 วินาที
// });

// // จัดการข้อผิดพลาดการเชื่อมต่อ
// socket.on('error', (err) => {
//     console.error('Connection error:', err.message);
// });

// // ปิดการเชื่อมต่อเมื่อสำเร็จ
// socket.on('close', () => {
//     console.log('Connection closed');
// });
// const Modbus = require('jsmodbus');
// const net = require('net');

// // ข้อมูลการเชื่อมต่อ
// const host = '192.168.10.1'; // IP ของ WD PRO receiver
// const port = 502; // พอร์ตที่ใช้สำหรับ Modbus/TCP

// // สร้าง socket connection
// const socket = new net.Socket();
// const options = {
//     host: host,
//     port: port
// };

// // สร้าง Modbus TCP client
// const client = new Modbus.client.TCP(socket);

// // เชื่อมต่อไปยัง WD PRO receiver
// socket.connect(options);

// // ฟังก์ชันสำหรับดึง MAC Address
// function readMACAddress() {
//     // อ่านข้อมูลจาก Holding Registers (ตัวอย่าง: Address 0-3 สำหรับ MAC Address)
//     client.readHoldingRegisters(0, 4) // อ่าน 4 registers ที่ Address 0 (สำหรับ MAC Address)
//         .then((response) => {
//             const macBytes = response.response._body.values;
//             // แปลง MAC Address จาก byte array เป็น string
//             const macAddress = macBytes.map(byte => byte.toString(16).padStart(2, '0')).join(':');
//             console.log('MAC Address:', macAddress);
//         })
//         .catch((err) => {
//             console.error('Error reading MAC Address:', err);
//         });
// }

// // ฟังก์ชันสำหรับดึงสถานะของไฟ
// function readLightStatus() {
//     client.readHoldingRegisters(4, 3) // ที่อยู่เริ่มต้นที่ 4, อ่าน 3 registers (สำหรับไฟแดง, เหลือง, เขียว)
//         .then((response) => {
//             const data = response.response._body.values;
//             console.log('Data received:', data);

//             // ตรวจสอบสถานะของไฟแต่ละสี
//             const redLightStatus = data[0]; // ค่าสถานะของไฟสีแดง
//             const yellowLightStatus = data[1]; // ค่าสถานะของไฟสีเหลือง
//             const greenLightStatus = data[2]; // ค่าสถานะของไฟสีเขียว

//             // แสดงสถานะไฟ
//             console.log('Red Light Status:', redLightStatus ? 'ON' : 'OFF');
//             console.log('Yellow Light Status:', yellowLightStatus ? 'ON' : 'OFF');
//             console.log('Green Light Status:', greenLightStatus ? 'ON' : 'OFF');
//         })
//         .catch((err) => {
//             console.error('Error reading registers:', err);
//         });
// }

// // เมื่อเชื่อมต่อสำเร็จ
// socket.on('connect', () => {
//     console.log('Connected to the Modbus server');

//     // เรียกใช้ฟังก์ชัน readMACAddress และ readLightStatus ทุก ๆ 1 วินาที
//     setInterval(() => {
//         readMACAddress();   // ดึง MAC Address ทุกครั้งที่เรียก
//         readLightStatus();  // ดึงสถานะของไฟทุกครั้งที่เรียก
//     }, 1000); // 1000ms = 1 วินาที
// });

// // จัดการข้อผิดพลาดการเชื่อมต่อ
// socket.on('error', (err) => {
//     console.error('Connection error:', err.message);
// });

// // ปิดการเชื่อมต่อเมื่อสำเร็จ
// socket.on('close', () => {
//     console.log('Connection closed');
// });
const Modbus = require('jsmodbus');
const net = require('net');

// ข้อมูลการเชื่อมต่อ
const host = '192.168.10.1'; // IP ของ WD PRO receiver
const port = 502; // พอร์ตที่ใช้สำหรับ Modbus/TCP

// สร้าง socket connection
const socket = new net.Socket();
const options = {
    host: host,
    port: port
};

// สร้าง Modbus TCP client
const client = new Modbus.client.TCP(socket);

// เชื่อมต่อไปยัง WD PRO receiver
socket.connect(options);

// ฟังก์ชันสำหรับดึง MAC Address
function readMACAddress() {
    return client.readHoldingRegisters(0, 4) // อ่าน 4 registers ที่ Address 0 (สำหรับ MAC Address)
        .then((response) => {
            const macBytes = response.response._body.values;
            // แปลง MAC Address จาก byte array เป็น string
            const macAddress = macBytes.map(byte => byte.toString(16).padStart(2, '0')).join(':');
            return macAddress;
        })
        .catch((err) => {
            console.error('Error reading MAC Address:', err);
            throw err;
        });
}

// ฟังก์ชันสำหรับดึงสถานะของไฟ
function readLightStatus() {
    return client.readHoldingRegisters(4, 3) // ที่อยู่เริ่มต้นที่ 4, อ่าน 3 registers (สำหรับไฟแดง, เหลือง, เขียว)
        .then((response) => {
            const data = response.response._body.values;
            // แปลงข้อมูลสถานะไฟเป็น JSON object
            return {
                red: data[0] ? 'ON' : 'OFF',
                yellow: data[1] ? 'ON' : 'OFF',
                green: data[2] ? 'ON' : 'OFF'
            };
        })
        .catch((err) => {
            console.error('Error reading registers:', err);
            throw err;
        });
}

// เมื่อเชื่อมต่อสำเร็จ
socket.on('connect', async () => {
    console.log('Connected to the Modbus server');

    setInterval(async () => {
        try {
            // ดึงข้อมูลทั้ง MAC Address และสถานะไฟ
            const macAddress = await readMACAddress();
            const lightStatus = await readLightStatus();

            // สร้าง JSON object ที่รวมข้อมูลทั้งสอง
            const result = {
                macAddress: macAddress,
                lightStatus: lightStatus
            };

            // แสดงผล JSON object ใน console
            console.log(JSON.stringify(result, null, 2));

        } catch (err) {
            console.error('Error:', err);
        }
    }, 1000); // เรียกทุก ๆ 1 วินาที
});

// จัดการข้อผิดพลาดการเชื่อมต่อ
socket.on('error', (err) => {
    console.error('Connection error:', err.message);
});

// ปิดการเชื่อมต่อเมื่อสำเร็จ
socket.on('close', () => {
    console.log('Connection closed');
});
