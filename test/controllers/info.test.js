const axios = require('axios');

test('[GET] info/ returns data correctly', async() => {
    const response = await axiosGet('http://localhost:8080/info');
    expect(typeof response.sistema).toBe('string')
    expect(response.nodeVersion).toMatch(/^v\d+\.\d+\.\d+/)
    expect(typeof response.path).toBe('string')
    expect(typeof response.processId).toBe('number')
    expect(typeof response.memory.rss).toBe('number')
    expect(typeof response.numberCPUs).toBe('number')
});


const axiosGet = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

