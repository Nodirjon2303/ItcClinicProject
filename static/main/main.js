// var link = 'http://127.0.0.1:8000/'
// var link = 'http://137.184.201.8:1212/'
var link = '/'
// link = '/'
var preloader = document.getElementById('page-preloader');


let btnPreloader = document.getElementById('btn-preloader');


function render_class(clas) {
    preloader.classList.remove('done');
    var url = `${link}classpost/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "class": clas
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                datas = data['data']
                html = `<tr>
        <th colspan="90" id="nodirjon"> Эталон ўқув танлама </th>
    </tr>
    <tr>
        <td style="color: green">N</td>
        <td>x1</td>
        <td>x2</td>
        <td>x3</td>
        <td>x4</td>
        <td>x5</td>
        <td>x6</td>
        <td>x7</td>
        <td>x8</td>
        <td>x9</td>
        <td>x10</td>
        <td>x11</td>
        <td>x12</td>
        <td>x13</td>
        <td>x14</td>
        <td>x15</td>
        <td>x16</td>
        <td>x17</td>
        <td>x18</td>
        <td>x19</td>
        <td>x20</td>
        <td>x21</td>
        <td>x22</td>
        <td>x23</td>
        <td>x24</td>
        <td>x25</td>
        <td>x26</td>
        <td>x27</td>
        <td>x28</td>
        <td>x29</td>
        <td>x30</td>
        <td>x31</td>
        <td>x32</td>
        <td>x33</td>
        <td>x34</td>
        <td>x35</td>
        <td>x36</td>
        <td>x37</td>
        <td>x38</td>
        <td>x39</td>
        <td>x40</td>
        <td>x41</td>
        <td>x42</td>
        <td>x43</td>
        <td>x44</td>
        <td>x45</td>
        <td>x46</td>
        <td>x47</td>
        <td>x48</td>
        <td>x49</td>
        <td>x50</td>
        <td>x51</td>
        <td>x52</td>
        <td>x53</td>
        <td>x54</td>
        <td>x55</td>
        <td>x56</td>
        <td>x57</td>
        <td>x58</td>
        <td>x59</td>
        <td>x60</td>
        <td>x61</td>
        <td>x62</td>
        <td>x63</td>
        <td>x64</td>
        <td>x65</td>
        <td>x66</td>
        <td>x67</td>
        <td>x68</td>
        <td>x69</td>
        <td>x70</td>
        <td>x71</td>
        <td>x72</td>
        <td>x73</td>
        <td>x74</td>
        <td>x75</td>
        <td>x76</td>
        <td>x77</td>
        <td>x78</td>
        <td>x79</td>
        <td>x80</td>
        <td>x81</td>
        <td>x82</td>
        <td>x83</td>
        <td>x84</td>
        <td>x85</td>
        <td>x86</td>
        <td>x87</td>
        <td>x88</td>
        <td>x89</td>
    </tr>`
                var sanoq = 0
                for (let i = 0; i < datas.length; i++) {
                    sanoq += 1
                    html += `
                     <tr>
        <td style="color: red">${sanoq}</td>
        <td>${datas[i]['x1']}</td>
        <td>${datas[i]['x2']}</td>
        <td>${datas[i]['x3']}</td>
        <td>${datas[i]['x4']}</td>
        <td>${datas[i]['x5']}</td>
        <td>${datas[i]['x6']}</td>
        <td>${datas[i]['x7']}</td>
        <td>${datas[i]['x8']}</td>
        <td>${datas[i]['x9']}</td>
        <td>${datas[i]['x10']}</td>
        <td>${datas[i]['x11']}</td>
        <td>${datas[i]['x12']}</td>
        <td>${datas[i]['x13']}</td>
        <td>${datas[i]['x14']}</td>
        <td>${datas[i]['x15']}</td>
        <td>${datas[i]['x16']}</td>
        <td>${datas[i]['x17']}</td>
        <td>${datas[i]['x18']}</td>
        <td>${datas[i]['x19']}</td>
        <td>${datas[i]['x20']}</td>
        <td>${datas[i]['x21']}</td>
        <td>${datas[i]['x22']}</td>
        <td>${datas[i]['x23']}</td>
        <td>${datas[i]['x24']}</td>
        <td>${datas[i]['x25']}</td>
        <td>${datas[i]['x26']}</td>
        <td>${datas[i]['x27']}</td>
        <td>${datas[i]['x28']}</td>
        <td>${datas[i]['x29']}</td>
        <td>${datas[i]['x30']}</td>
        <td>${datas[i]['x31']}</td>
        <td>${datas[i]['x32']}</td>
        <td>${datas[i]['x33']}</td>
        <td>${datas[i]['x34']}</td>
        <td>${datas[i]['x35']}</td>
        <td>${datas[i]['x36']}</td>
        <td>${datas[i]['x37']}</td>
        <td>${datas[i]['x38']}</td>
        <td>${datas[i]['x39']}</td>
        <td>${datas[i]['x40']}</td>
        <td>${datas[i]['x41']}</td>
        <td>${datas[i]['x42']}</td>
        <td>${datas[i]['x43']}</td>
        <td>${datas[i]['x44']}</td>
        <td>${datas[i]['x45']}</td>
        <td>${datas[i]['x46']}</td>
        <td>${datas[i]['x47']}</td>
        <td>${datas[i]['x48']}</td>
        <td>${datas[i]['x49']}</td>
        <td>${datas[i]['x50']}</td>
        <td>${datas[i]['x51']}</td>
        <td>${datas[i]['x52']}</td>
        <td>${datas[i]['x53']}</td>
        <td>${datas[i]['x54']}</td>
        <td>${datas[i]['x55']}</td>
        <td>${datas[i]['x56']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x59']}</td>
        <td>${datas[i]['x60']}</td>
        <td>${datas[i]['x61']}</td>
        <td>${datas[i]['x62']}</td>
        <td>${datas[i]['x63']}</td>
        <td>${datas[i]['x64']}</td>
        <td>${datas[i]['x65']}</td>
        <td>${datas[i]['x66']}</td>
        <td>${datas[i]['x67']}</td>
        <td>${datas[i]['x68']}</td>
        <td>${datas[i]['x69']}</td>
        <td>${datas[i]['x70']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x73']}</td>
        <td>${datas[i]['x74']}</td>
        <td>${datas[i]['x75']}</td>
        <td>${datas[i]['x76']}</td>
        <td>${datas[i]['x77']}</td>
        <td>${datas[i]['x78']}</td>
        <td>${datas[i]['x79']}</td>
        <td>${datas[i]['x80']}</td>
        <td>${datas[i]['x81']}</td>
        <td>${datas[i]['x82']}</td>
        <td>${datas[i]['x83']}</td>
        <td>${datas[i]['x84']}</td>
        <td>${datas[i]['x85']}</td>
        <td>${datas[i]['x86']}</td>
        <td>${datas[i]['x87']}</td>
        <td>${datas[i]['x88']}</td>
        <td>${datas[i]['x89']}</td>
    </tr>

                    `
                }
                document.getElementById('nimadir').innerHTML = html
            })
        })
}

function render_class_norm(clas) {
    preloader.classList.remove('done');
    var url = `${link}nolbir/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "class": clas
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                data = data['data']
                datas = data['data']
                html = `<tr>
        <th colspan="90" id="nodirjon">Объектларнинг белги қийматларини 0 ва 1 қийматга алматириш натижалари</th>
    </tr>
    <tr>
        <td style="color: green">N</td>
        <td>x1</td>
        <td>x2</td>
        <td>x3</td>
        <td>x4</td>
        <td>x5</td>
        <td>x6</td>
        <td>x7</td>
        <td>x8</td>
        <td>x9</td>
        <td>x10</td>
        <td>x11</td>
        <td>x12</td>
        <td>x13</td>
        <td>x14</td>
        <td>x15</td>
        <td>x16</td>
        <td>x17</td>
        <td>x18</td>
        <td>x19</td>
        <td>x20</td>
        <td>x21</td>
        <td>x22</td>
        <td>x23</td>
        <td>x24</td>
        <td>x25</td>
        <td>x26</td>
        <td>x27</td>
        <td>x28</td>
        <td>x29</td>
        <td>x30</td>
        <td>x31</td>
        <td>x32</td>
        <td>x33</td>
        <td>x34</td>
        <td>x35</td>
        <td>x36</td>
        <td>x37</td>
        <td>x38</td>
        <td>x39</td>
        <td>x40</td>
        <td>x41</td>
        <td>x42</td>
        <td>x43</td>
        <td>x44</td>
        <td>x45</td>
        <td>x46</td>
        <td>x47</td>
        <td>x48</td>
        <td>x49</td>
        <td>x50</td>
        <td>x51</td>
        <td>x52</td>
        <td>x53</td>
        <td>x54</td>
        <td>x55</td>
        <td>x56</td>
        <td>x57</td>
        <td>x58</td>
        <td>x59</td>
        <td>x60</td>
        <td>x61</td>
        <td>x62</td>
        <td>x63</td>
        <td>x64</td>
        <td>x65</td>
        <td>x66</td>
        <td>x67</td>
        <td>x68</td>
        <td>x69</td>
        <td>x70</td>
        <td>x71</td>
        <td>x72</td>
        <td>x73</td>
        <td>x74</td>
        <td>x75</td>
        <td>x76</td>
        <td>x77</td>
        <td>x78</td>
        <td>x79</td>
        <td>x80</td>
        <td>x81</td>
        <td>x82</td>
        <td>x83</td>
        <td>x84</td>
        <td>x85</td>
        <td>x86</td>
        <td>x87</td>
        <td>x88</td>
        <td>x89</td>
    </tr>`
                var sanoq = 0
                for (let i = 0; i < datas.length; i++) {
                    sanoq += 1
                    html += `
                     <tr>
        <td style="color: red">${sanoq}</td>
        <td>${datas[i]['x1']}</td>
        <td>${datas[i]['x2']}</td>
        <td>${datas[i]['x3']}</td>
        <td>${datas[i]['x4']}</td>
        <td>${datas[i]['x5']}</td>
        <td>${datas[i]['x6']}</td>
        <td>${datas[i]['x7']}</td>
        <td>${datas[i]['x8']}</td>
        <td>${datas[i]['x9']}</td>
        <td>${datas[i]['x10']}</td>
        <td>${datas[i]['x11']}</td>
        <td>${datas[i]['x12']}</td>
        <td>${datas[i]['x13']}</td>
        <td>${datas[i]['x14']}</td>
        <td>${datas[i]['x15']}</td>
        <td>${datas[i]['x16']}</td>
        <td>${datas[i]['x17']}</td>
        <td>${datas[i]['x18']}</td>
        <td>${datas[i]['x19']}</td>
        <td>${datas[i]['x20']}</td>
        <td>${datas[i]['x21']}</td>
        <td>${datas[i]['x22']}</td>
        <td>${datas[i]['x23']}</td>
        <td>${datas[i]['x24']}</td>
        <td>${datas[i]['x25']}</td>
        <td>${datas[i]['x26']}</td>
        <td>${datas[i]['x27']}</td>
        <td>${datas[i]['x28']}</td>
        <td>${datas[i]['x29']}</td>
        <td>${datas[i]['x30']}</td>
        <td>${datas[i]['x31']}</td>
        <td>${datas[i]['x32']}</td>
        <td>${datas[i]['x33']}</td>
        <td>${datas[i]['x34']}</td>
        <td>${datas[i]['x35']}</td>
        <td>${datas[i]['x36']}</td>
        <td>${datas[i]['x37']}</td>
        <td>${datas[i]['x38']}</td>
        <td>${datas[i]['x39']}</td>
        <td>${datas[i]['x40']}</td>
        <td>${datas[i]['x41']}</td>
        <td>${datas[i]['x42']}</td>
        <td>${datas[i]['x43']}</td>
        <td>${datas[i]['x44']}</td>
        <td>${datas[i]['x45']}</td>
        <td>${datas[i]['x46']}</td>
        <td>${datas[i]['x47']}</td>
        <td>${datas[i]['x48']}</td>
        <td>${datas[i]['x49']}</td>
        <td>${datas[i]['x50']}</td>
        <td>${datas[i]['x51']}</td>
        <td>${datas[i]['x52']}</td>
        <td>${datas[i]['x53']}</td>
        <td>${datas[i]['x54']}</td>
        <td>${datas[i]['x55']}</td>
        <td>${datas[i]['x56']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x59']}</td>
        <td>${datas[i]['x60']}</td>
        <td>${datas[i]['x61']}</td>
        <td>${datas[i]['x62']}</td>
        <td>${datas[i]['x63']}</td>
        <td>${datas[i]['x64']}</td>
        <td>${datas[i]['x65']}</td>
        <td>${datas[i]['x66']}</td>
        <td>${datas[i]['x67']}</td>
        <td>${datas[i]['x68']}</td>
        <td>${datas[i]['x69']}</td>
        <td>${datas[i]['x70']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x73']}</td>
        <td>${datas[i]['x74']}</td>
        <td>${datas[i]['x75']}</td>
        <td>${datas[i]['x76']}</td>
        <td>${datas[i]['x77']}</td>
        <td>${datas[i]['x78']}</td>
        <td>${datas[i]['x79']}</td>
        <td>${datas[i]['x80']}</td>
        <td>${datas[i]['x81']}</td>
        <td>${datas[i]['x82']}</td>
        <td>${datas[i]['x83']}</td>
        <td>${datas[i]['x84']}</td>
        <td>${datas[i]['x85']}</td>
        <td>${datas[i]['x86']}</td>
        <td>${datas[i]['x87']}</td>
        <td>${datas[i]['x88']}</td>
        <td>${datas[i]['x89']}</td>
    </tr>

                    `
                }
                var sanoq = 0
                datas = data['patient']
                for (let i = 0; i < datas.length; i++) {
                    sanoq += 1
                    html += `
                     <tr>
        <td style="color: red">${datas[i]['name']}</td>
        <td>${datas[i]['x1']}</td>
        <td>${datas[i]['x2']}</td>
        <td>${datas[i]['x3']}</td>
        <td>${datas[i]['x4']}</td>
        <td>${datas[i]['x5']}</td>
        <td>${datas[i]['x6']}</td>
        <td>${datas[i]['x7']}</td>
        <td>${datas[i]['x8']}</td>
        <td>${datas[i]['x9']}</td>
        <td>${datas[i]['x10']}</td>
        <td>${datas[i]['x11']}</td>
        <td>${datas[i]['x12']}</td>
        <td>${datas[i]['x13']}</td>
        <td>${datas[i]['x14']}</td>
        <td>${datas[i]['x15']}</td>
        <td>${datas[i]['x16']}</td>
        <td>${datas[i]['x17']}</td>
        <td>${datas[i]['x18']}</td>
        <td>${datas[i]['x19']}</td>
        <td>${datas[i]['x20']}</td>
        <td>${datas[i]['x21']}</td>
        <td>${datas[i]['x22']}</td>
        <td>${datas[i]['x23']}</td>
        <td>${datas[i]['x24']}</td>
        <td>${datas[i]['x25']}</td>
        <td>${datas[i]['x26']}</td>
        <td>${datas[i]['x27']}</td>
        <td>${datas[i]['x28']}</td>
        <td>${datas[i]['x29']}</td>
        <td>${datas[i]['x30']}</td>
        <td>${datas[i]['x31']}</td>
        <td>${datas[i]['x32']}</td>
        <td>${datas[i]['x33']}</td>
        <td>${datas[i]['x34']}</td>
        <td>${datas[i]['x35']}</td>
        <td>${datas[i]['x36']}</td>
        <td>${datas[i]['x37']}</td>
        <td>${datas[i]['x38']}</td>
        <td>${datas[i]['x39']}</td>
        <td>${datas[i]['x40']}</td>
        <td>${datas[i]['x41']}</td>
        <td>${datas[i]['x42']}</td>
        <td>${datas[i]['x43']}</td>
        <td>${datas[i]['x44']}</td>
        <td>${datas[i]['x45']}</td>
        <td>${datas[i]['x46']}</td>
        <td>${datas[i]['x47']}</td>
        <td>${datas[i]['x48']}</td>
        <td>${datas[i]['x49']}</td>
        <td>${datas[i]['x50']}</td>
        <td>${datas[i]['x51']}</td>
        <td>${datas[i]['x52']}</td>
        <td>${datas[i]['x53']}</td>
        <td>${datas[i]['x54']}</td>
        <td>${datas[i]['x55']}</td>
        <td>${datas[i]['x56']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x57']}</td>
        <td>${datas[i]['x59']}</td>
        <td>${datas[i]['x60']}</td>
        <td>${datas[i]['x61']}</td>
        <td>${datas[i]['x62']}</td>
        <td>${datas[i]['x63']}</td>
        <td>${datas[i]['x64']}</td>
        <td>${datas[i]['x65']}</td>
        <td>${datas[i]['x66']}</td>
        <td>${datas[i]['x67']}</td>
        <td>${datas[i]['x68']}</td>
        <td>${datas[i]['x69']}</td>
        <td>${datas[i]['x70']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x71']}</td>
        <td>${datas[i]['x73']}</td>
        <td>${datas[i]['x74']}</td>
        <td>${datas[i]['x75']}</td>
        <td>${datas[i]['x76']}</td>
        <td>${datas[i]['x77']}</td>
        <td>${datas[i]['x78']}</td>
        <td>${datas[i]['x79']}</td>
        <td>${datas[i]['x80']}</td>
        <td>${datas[i]['x81']}</td>
        <td>${datas[i]['x82']}</td>
        <td>${datas[i]['x83']}</td>
        <td>${datas[i]['x84']}</td>
        <td>${datas[i]['x85']}</td>
        <td>${datas[i]['x86']}</td>
        <td>${datas[i]['x87']}</td>
        <td>${datas[i]['x88']}</td>
        <td>${datas[i]['x89']}</td>
    </tr>

                    `
                }
                datas = data['middledata']

                html5 = `<tr>

                <th colspan="90">Hisoblash jarayoni</th>
</tr>`
                html5 += `
                        <tr>
        <td style="color: red">o'rta vakil obyekti</td>`
                for (let i = 1; i < datas.length; i++) {
                    html5 += `
        <td>${datas[i]}</td>
                `
                }
                html5 += `
    </tr>`
                datas = data['adata']
                html5 += `
                        <tr>
        <td style="color: red">a</td>`
                for (let i = 1; i < datas.length; i++) {
                    html5 += `
        <td>${datas[i]}</td>
                `
                }
                html5 += `
    </tr>`
                datas = data['datab']
                console.log(datas.length)
                sanoq= 1
                for (let  i=0;i<datas.length;i++){
                    datab = datas[i]
                    html5+=`<tr>`
                    html5+=`<td> b${sanoq}</td>`
                    for (let j=1;j<datab.length;j++){
                        html5+=`<td> ${datab[j]} </td>`
                    }
                    html5+=`</tr>`
                    sanoq++;
                }





                datas = data['datanolbir']
                html2 = `<tr>
        <th colspan="90" id="nodirjon">Объектларнинг белги қийматларини 0 ва 1 қийматга алматириш натижалари
</th>
    </tr>
    <tr>
        <td style="color: green">N</td>
        <td>x1</td>
        <td>x2</td>
        <td>x3</td>
        <td>x4</td>
        <td>x5</td>
        <td>x6</td>
        <td>x7</td>
        <td>x8</td>
        <td>x9</td>
        <td>x10</td>
        <td>x11</td>
        <td>x12</td>
        <td>x13</td>
        <td>x14</td>
        <td>x15</td>
        <td>x16</td>
        <td>x17</td>
        <td>x18</td>
        <td>x19</td>
        <td>x20</td>
        <td>x21</td>
        <td>x22</td>
        <td>x23</td>
        <td>x24</td>
        <td>x25</td>
        <td>x26</td>
        <td>x27</td>
        <td>x28</td>
        <td>x29</td>
        <td>x30</td>
        <td>x31</td>
        <td>x32</td>
        <td>x33</td>
        <td>x34</td>
        <td>x35</td>
        <td>x36</td>
        <td>x37</td>
        <td>x38</td>
        <td>x39</td>
        <td>x40</td>
        <td>x41</td>
        <td>x42</td>
        <td>x43</td>
        <td>x44</td>
        <td>x45</td>
        <td>x46</td>
        <td>x47</td>
        <td>x48</td>
        <td>x49</td>
        <td>x50</td>
        <td>x51</td>
        <td>x52</td>
        <td>x53</td>
        <td>x54</td>
        <td>x55</td>
        <td>x56</td>
        <td>x57</td>
        <td>x58</td>
        <td>x59</td>
        <td>x60</td>
        <td>x61</td>
        <td>x62</td>
        <td>x63</td>
        <td>x64</td>
        <td>x65</td>
        <td>x66</td>
        <td>x67</td>
        <td>x68</td>
        <td>x69</td>
        <td>x70</td>
        <td>x71</td>
        <td>x72</td>
        <td>x73</td>
        <td>x74</td>
        <td>x75</td>
        <td>x76</td>
        <td>x77</td>
        <td>x78</td>
        <td>x79</td>
        <td>x80</td>
        <td>x81</td>
        <td>x82</td>
        <td>x83</td>
        <td>x84</td>
        <td>x85</td>
        <td>x86</td>
        <td>x87</td>
        <td>x88</td>
        <td>x89</td>
    </tr>`
                sanoq = 0
                for (let i = 0; i < datas.length; i++) {
                    html3 = `
                        <tr>
        <td style="color: red">${sanoq}</td>`
                    for (let j = 1; j < 90; j++) {
                        html3 += `
                        <td>${datas[i][j]}
                        `
                    }
                    sanoq++;
                    html3 += `</tr>`
                    html2 += html3
                }

                html8 = `<a href="${data['document']}" download=""> Excel formatda yuklab olish</a>`
                document.getElementById('downloadexcel').innerHTML = html8
                document.getElementById('normal').innerHTML = html
                document.getElementById('nolbir').innerHTML = html2
                document.getElementById('middledata').innerHTML = html5
            })
        })
}


function render_class_normallashtir(clas) {
    preloader.classList.remove('done');
    var url = `${link}normallashtirish/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "class": clas
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                datas = data['data']
                html = `<tr>
        <th colspan="90" id="nodirjon">Объектларнинг белги қийматларини нормаллаштириш</th>
    </tr>
    <tr>
        <td style="color: green">N</td>`
                for (let i = 1; i < 90; i++) {
                    html += `<td>x${i}</td>`
                }
                html += `</tr>`
                for (let i = 0; i < datas.length; i++) {
                    html += `<tr>
<td style="color: green">${datas[i][0]}</td>`
                    for (let j = 1; j < 90; j++) {
                        html += `<td>${datas[i][j]}</td>`
                    }
                    html += `</tr>`
                }

                datas = data['maxdata']
                html += `<tr>
<td style="color: green">${datas[0]}</td>`
                for (let i = 1; i < datas.length; i++) {
                    html += `<td>${datas[i]}</td>`

                }
                html += `</tr>`

                datas = data['normaldata']

                html2 = `<tr>
        <th colspan="90" id="nodirjon">Объектларнинг белги қийматларини нормаллаштириш</th>
    </tr>
    <tr>
        <td style="color: green">N</td>`
                for (let i = 1; i < 90; i++) {
                    html2 += `<td>x${i}</td>`
                }
                html2 += `</tr>`

                for (let i = 0; i < datas.length; i++) {
                    html2 += `<tr>
<td style="color: green">${datas[i][0]}</td>`
                    for (let j = 1; j < 90; j++) {
                        html2 += `
                        <td>${datas[i][j]}</td>
                        `
                    }

                }
                html8 = `<a href="${data['document']}" download=""> Ехcел форматда юклаб олиш</a>`
                document.getElementById('downloadexcel').innerHTML = html8
                document.getElementById('classobyekt').innerHTML = html
                document.getElementById('normallashtirish').innerHTML = html2
            })
        })
}


function render_class_sinflashtir(patient_id) {
    preloader.classList.remove('done')
    var url = `${link}sinflashtirish/`
    fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "patient_id": patient_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                datas = data['data']
                for (let i = 1; i < 6; i++) {
                    html = `<tr>
        <th colspan="90" id="class${i}">Синфлаштиришнинг ${i}-синф учун олинган натижалари </th>
    </tr>
 <tr>
 <td>N </td>
 <td>L </td>
 <td>Синф объектларига нисбатан ўртача қиймат
 </td>
 <td>Информатив симптокомплексларга нисбатан ўртача қиймат
 </td>
 </tr>
`
                    var dataclass = datas[`class${i}`]
                    var sanoq = 1
                    for (let j = 0; j < dataclass.length; j++) {
                        html += `
<tr>
                    <td>${sanoq}</td>
                    <td>L = ${dataclass[j][1]}</td>
                    <td>${dataclass[j][0]}</td>
                    <td>${dataclass[j][0] / dataclass[j][1]}</td>
</tr>                
                    `
                        sanoq++
                    }
                    document.getElementById(`class${i}`).innerHTML = html

                }
//                     dataclas = datas[`class${i}`]
//                     var clasyigindi = 0
//                     for (let j = 10;j<16;j++){
//                         html+=`<td>L = ${j}</td>`
//                         var yigindi = 0
//                         var sanoq = 0
//                         for (let k =0; k<dataclas[`L${j}`][0].length;k++){
//                             sanoq++;
//                             yigindi+=dataclas[`L${j}`][0][k]
//                             html+=`<td>${dataclas[`L${j}`][0][k]}</td>`
//                         }
//                         if (sanoq!=0){
//                         html+=`<td style="color: red">Jami: ${yigindi}</td>`
//                         html+=`<td style="color: black">O'rtachasi: ${yigindi/sanoq}</td>`
//                         clasyigindi+=yigindi/sanoq
//                         }
//                         html+=`</tr><tr>`
//                     }
//
//                     html+=`</tr>`
//                     html+=`<tr>
// <td style="color: #d41872" colspan="90">Jami:  ${clasyigindi}</td>
// </tr>`
//
//                     document.getElementById(`class${i}`).innerHTML = html
//                 }
//                 datas = data['tashxis']
//                     console.log(datas)
//                     html2 = `<h1>${datas['class']}</h1>
//                     <br>
//                     <p>Kasallikka tashxis: ${datas['result']}</p>
// `
//                     document.getElementById('Tashxis').innerHTML = html2
            })
        })

}

function patient_shikoyat(id, patient_id) {
    preloader.classList.remove('done');
    var url = `${link}patient-render-shikoyat/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'id': id,
            'patient_id': patient_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                datas = data['data']
                html = `<form action="" method="post">
    <tr>
    <th colspan="4">${datas[0]}</th>
</tr>
`

                for (let i = 1; i < datas.length; i++) {
                    if (data['birlik'].length == 0) {
                        if (datas[i][2] != null) {
                            html += `
                     <tr>
                     <td>${datas[i][0]}</td>
                     <td>${datas[i][1]}</td>
                     <td><input onchange="change_patient_inf(${patient_id},'${datas[i][0]}')" id="nodir${datas[i][0]}" type="text" value="${datas[i][2]}"></td>
                    
                     </tr>
`
                        } else {
                            html += `
                     <tr>
                     <td>${datas[i][0]}</td>
                     <td>${datas[i][1]}</td>
                     <td><input type="text" onchange="change_patient_inf(${patient_id}, '${datas[i][0]}')" id="nodir${datas[i][0]}" value=""></td>
                     </tr>
               
`
                        }
                    } else {
                        if (datas[i][2] != null) {
                            html += `
                     <tr>
                     <td>${datas[i][0]}</td>
                     <td>${datas[i][1]}</td>
                     <td><input onchange="change_patient_inf(${patient_id},'${datas[i][0]}')" id="nodir${datas[i][0]}" type="text" value="${datas[i][2]}"></td>
                     <td>${data['birlik'][i - 1]}</td>
                     </tr>
`
                        } else {
                            html += `
                     <tr>
                     <td>${datas[i][0]}</td>
                     <td>${datas[i][1]}</td>
                     <td><input type="text" onchange="change_patient_inf(${patient_id}, '${datas[i][0]}')" id="nodir${datas[i][0]}" value=""></td>
                      <td>${data['birlik'][i - 1]}</td>
                     </tr>
               
`
                        }
                    }

                }
                if (id < 7) {

                    html += `<button onclick="patient_shikoyat(${id + 1}, ${patient_id})" class="next">Кейингиси</button>`
                }
                if (id > 1) {
                    html += `<button onclick="patient_shikoyat(${id - 1}, ${patient_id})" class="prev">Ортга</button>`

                }
                if (id == 7) {
                    html += `<button onclick="patient_tashxislash(${patient_id})" class="diagnos">Ташхислаш</button>`
                }
                document.getElementById('patient_table').innerHTML = html
                if (data['comment']) {
                    html3 = `
              <p><h3>Изоҳ: ${data['comment']}</h3></p> 
              `
                    document.getElementById('patient-comment').innerHTML = html3
                    document.getElementById('finalresult').innerHTML = ``
                } else {
                    html3 = ``
                    document.getElementById('finalresult').innerHTML = ``
                    document.getElementById('patient-comment').innerHTML = html3
                }
            })

        })
}

function admin_result() {
    preloader.classList.remove('done');
    var url = `${link}normresult/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "id": 12
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                datas = data['max']
                html = `
                <tr>
                <th colspan="90">Синфлаштириш қийматларини нормаллаштириш натижалари ва улар асосида қўйилган якуний ташхис
                </th>
</tr>
<tr>
<td>Class</td>
                `
                datas = data['Ldata']
                for (let i = 0; i < datas.length; i++) {
                    html += `<td>L = ${datas[i]}</td>`
                }

                html += `
<td>Jami:</td>
</tr>`
                datas = data['data']
                for (let i = 1; i < 6; i++) {
                    html += `<tr>
                    <td>${i}-Class</td>
`
                    dataL = data['Ldata']
                    for (let j = 0; j < dataL.length; j++) {
                        html += `<td>${datas[`class${i}`][`L${dataL[j]}`]}</td>`
                    }
                    html += `<td>${data['max'][i - 1]}</td>`
                    html += `</tr>`
                }
                document.getElementById('resultpage').innerHTML = html
                datas = data['ill']
                html = `
                <h1>${datas[1]}- class</h1>
                <h1>${datas[0]}</h1>
                `
                document.getElementById('illname').innerHTML = html

            })

        })
}


function patient_tashxislash(patient_id) {
    preloader.classList.remove('done');
    var url = `${link}patient/3/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'patient_id': patient_id

        })
    })
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                preloader.classList.add('done')
                html3 = ``
                if (data['ill']) {
                    html = `<tr>
            <th colspan="2">Якуний ташхислаш натижаси</th>
        </tr>
        <tr>
            <td>Дастур томонидан қўйилган ташхис</td>
            <td id="finaldiagnos"></td>
        </tr>
        <tr>
            <td>Шифокор томонидан қўйилган ташхис ва тавсиялар</td>
            <td><input onchange="final_diagnos_put(${patient_id}, 'doctor_diagnos')" id="nodirdoctor_diagnos" type="text" value="${data['tashxis']}"></td>
        </tr>
        <tr>
            <td>Даволовчи шифокор</td>
            <td><input onchange="final_diagnos_put(${patient_id}, 'doctor')" id="nodirdoctor" type="text" value="${data['doctor']}"></td>
        </tr>
        <tr>
            <td>Бўлим бошилиғи</td>
            <td><input onchange="final_diagnos_put(${patient_id}, 'partboss')" id="nodirpartboss" type="text" value="${data['partboss']}"></td>
        </tr>
        <tr>
            <td>Бош шифокор</td>
            <td><input onchange="final_diagnos_put(${patient_id}, 'maindoctor')" id="nodirmaindoctor" type="text" value="${data['maindoctor']}"></td>
        </tr>`
                    html3 = `<button onclick="save_patient_informs(${patient_id})" class="patient__btn">Сақлаш</button>`

                } else {
                    html = `<tr><th>${data['data']}</th></tr>`
                }

                document.getElementById('finalresult').innerHTML = html
                document.getElementById('savebutton').innerHTML = html3
                document.getElementById('finaldiagnos').innerHTML = `${data['ill'][0]}`
            })

        })

}

function save_patient_informs(patient_id) {
    preloader.classList.remove('done');
    var url = `${link}savepatient/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "patient_id": patient_id
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
                console.log(data)
                if (data['error']) {
                    window.alert(`${data['error']}`)
                } else {
                    document.location.reload()
                }
            })

        })
}


function change_patient_inf(patient_id, name) {
    preloader.classList.remove('done');
    value = document.getElementById(`nodir${name}`).value
    var url = `${link}last-patients/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "patient_id": patient_id,
            'name': name,
            'value': value,
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
            })

        })
}

function final_diagnos_put(patient_id, name) {
    preloader.classList.remove('done');
    value = document.getElementById(`nodir${name}`).value
    var url = `${link}final-result/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            "patient_id": patient_id,
            'name': name,
            'value': value,
        })
    })
        .then((response) => {
            response.json().then((data) => {
                preloader.classList.add('done')
            })

        })
}

$(window).on('load', function () {
    $preloader = $('.preloader'),
        $loader = $preloader.find('.sk-folding-cube');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

document.body.onload = function () {

    setTimeout(function () {

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 300);
}
