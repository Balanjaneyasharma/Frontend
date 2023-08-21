class Data{
    address_line;
    pincode;
    district;
    state;
    device_id;
    time;
    status;
    city;
    report;
    action;
    constructor(address_line,pincode,district,state,device_id,time,status,city,report){
        this.address_line =address_line;
        this.pincode = pincode;
        this.district = district;
        this.state = state;
        this.device_id = device_id;
        this.time = time;
        this.status = status;
        this.city = city;
        this.report = report;
        this.createRow();
    }
    createRow(){
        const table = document.querySelector('.page-login-data');
        /*Create row*/
        const row = document.createElement('div');
        row.classList.add('data-row');
        /*create columns*/
        const addressLine = document.createElement('div');
        const pincode = document.createElement('div');
        const district = document.createElement('div');
        const state = document.createElement('div');
        const deviceId = document.createElement('div');
        const time = document.createElement('div');
        const status = document.createElement('div');
        const city = document.createElement('div');
        const report = document.createElement('div');
        const action = document.createElement('div');
        /*create text elements for each column and assign values*/
        const addressLineText = document.createElement('span');
        addressLineText.innerText = this.address_line;
        const pincodeText = document.createElement('span');
        pincodeText.innerText = this.pincode;
        const districtText = document.createElement('span');
        districtText.innerText = this.district;
        const stateText = document.createElement('span');
        stateText.innerText = this.state;
        const deviceIdText = document.createElement('span');
        deviceIdText.innerText = this.device_id;
        const timeText = document.createElement('span');
        timeText.innerText = this.time;
        const statusText = document.createElement('span');
        statusText.innerText = this.status;
        const cityText = document.createElement('span');
        cityText.innerText = this.city;
        const reporText = document.createElement('span');
        reporText.innerText = this.report;
        const actionText = document.createElement('button');
        actionText.classList.add('page-table-button');
        actionText.style.display = 'none';
        /*In case of fire take action should appear*/
        if(statusText.innerText === 'fire'){
            row.style.color = 'red';
            actionText.style.display = 'inline-block';
            actionText.style.color ='red';            
            actionText.innerText  = 'Take Action';
            action.addEventListener('click',(e)=>{
                this.takeAction(this);

        })
        }
        /* append columnValues to columns*/
        addressLine.append(addressLineText);
        pincode.append(pincodeText);
        district.append(districtText);
        state.append(stateText);
        deviceId.append(deviceIdText);
        time.append(timeText);
        status.append(statusText);
        city.append(cityText);
        report.append(reporText);
        action.append(actionText);
        /*append columns to the row */
        row.append(addressLine);
        row.append(pincode);
        row.append(district);
        row.append(state);
        row.append(deviceId);
        row.append(time);
        row.append(status);
        row.append(city);
        row.append(report);
        row.append(action);
        /*Append row to table*/
        table.append(row);    
    }
    takeAction(obj){
        console.log(obj);
    
    }
}
const c = [
    {"address_line":"9-92 z p h school street","pincode":533006,"district":"east godavari","state":"andhra pradesh","device_id":1,"time":"2022-12-22T09:10:50.000Z","status":"under_control","city":"kakinada","report": null},
    {"address_line":"64-12-15/1 raghavendra street","pincode":533004,"district":"kakinada","state":"andhra pradesh","device_id":2,"time":"2022-12-22T09:27:06.000Z","status":"under_control","city":"kakinada","report": null},
    {"address_line":"kokila center","pincode":533005,"district":"kakinada","state":"andhra pradesh","device_id":3,"time":"2022-12-22T09:29:07.000Z","status":"under_control","city":"kakinada","report": null},
    {"address_line":"police academy","pincode":533009,"district":"east godavari","state":"andhra pradesh","device_id":4,"time":"2022-12-22T09:30:14.000Z","status":"under_control","city":"yanam","report": null},
    {"address_line":"65-12-15/1","pincode":177668,"district":"east godavari","state":"andhra pradesh","device_id":31,"time":"2023-02-01T13:38:24.000Z","status":"fire","city":"kakinada","report": null},
    {"address_line":"90-189","pincode":533001,"district":"kakinada","state":"andhra pradesh","device_id":160,"time":"2023-01-19T10:06:17.000Z","status":"fire","city":"kakinada","report": null},
    {"address_line":"16-32/1 dowlaiswaram","pincode":533125,"district":"east godavari","state":"andhra pradesh","device_id":410,"time":"2022-12-23T05:21:22.000Z","status":"under_control","city":"rajhmundry","report": null},
    {"address_line":"raithu market","pincode":533001,"district":"east godavari","state":"andhra pradesh","device_id":927,"time":"2022-12-22T12:48:28.000Z","status":"under_control","city":"kakinada","report": null}
];
c.forEach((ele)=>{
    new Data(ele.address_line,ele.pincode,ele.district,ele.state,ele.device_id,ele.time,ele.status,ele.city,ele.report);
});