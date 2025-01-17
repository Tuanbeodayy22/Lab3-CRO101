import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

const ViewComponent = () => {
  const colorText = (color: string) => ({ color });


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.outerContainer}>
      <View>
  
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nhập họ tên"
          style={styles.tipStyle}
        />
      
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
          style={styles.tipStyle}
        />
       
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          style={styles.tipStyle}
        />
      </View>

      {/* Thêm hình ảnh */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.24h.com.vn/upload/4-2020/images/2020-12-17/den-2-1608210874-13-width660height576.jpg',
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.container}>
        {/* Line 1 */}
        <Text style={styles.baseText}>
          em vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('red')]}>Vang đỏ</Text> anh vào đời bằng{' '}
          <Text style={[styles.italicText, colorText('yellow')]}>nước trà</Text>
        </Text>
        {/* Line 2 */}
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, { fontSize: 20 }, styles.italicText]}>Mùi đất</Text>{' '}
          và{' '}
          <Text style={[{ fontSize: 10 }, styles.italicText]}> Bằng hoa dại mọc trước nhà</Text>
        </Text>
        {/* Line 3 */}
        <Text
          style={[
            styles.baseText,
            styles.boldText,
            styles.italicText,
            colorText('gray'),
          ]}
        >
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        {/* Line 4 */}
        <Text style={[styles.baseText]}>
          Lý trí em là{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            }}
          >
            công cụ{' '}
          </Text>
          còn trái tim anh là{' '}
          <Text
            style={{
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            }}
          >
            động cơ{' '}
          </Text>
        </Text>

        {/* Line 5 */}
        <Text style={[styles.baseText, { textAlign: 'right' }]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>

        {/* Line 6 */}
        <Text
          style={[
            styles.baseText,
            {
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'orange',
            },
          ]}
        >
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>
        {/* Line 7 */}
        <Text
          style={[
            styles.baseText,
            {
              fontWeight: 'bold',
              color: 'black',
            },
          ]}
        >
          Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em vào đời bằng{' '}
          <Text style={colorText('yellow')}>nắng xanh</Text>
        </Text>

        {/* Line 8 */}
        <Text
          style={[
            styles.baseText,
            {
              fontWeight: 'bold',
              color: 'black',
            },
          ]}
        >
          Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con đường đỏ giữ{' '}
          <Text style={colorText('white')}>vắng anh</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  tipStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
    width: '80%',
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  imageCaption: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ViewComponent;
