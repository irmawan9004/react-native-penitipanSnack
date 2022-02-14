import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';
import Modal from 'react-native-modal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          namaWarung: 'warung Pak Anton',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 100,
          totalHarga: 100000,
          namaPemilik: 'Pak Anton',
          alamat: 'Jl Pantai',
        },
        {
          namaWarung: 'warung Pak Bejo',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 50,
          totalHarga: 50000,
          namaPemilik: 'Pak Bejo',
          alamat: 'Jl Pantai',
        },
        {
          namaWarung: 'warung Bu Tuun',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 76,
          totalHarga: 76000,
          namaPemilik: 'Bu Tuun',
          alamat: 'Jl Pantai',
        },
        {
          namaWarung: 'warung Bu Nanon',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 21,
          totalHarga: 21000,
          namaPemilik: 'Bu Nanon',
          alamat: 'Jl Pantai',
        },
      ],
      dataIcon: [
        {icon: 'user'},
        {icon: 'store'},
        {icon: 'store-alt'},
        {icon: 'user'},
      ],
      dataWarna: [
        {color: '#5A74F8'},
        {color: '#139487'},
        {color: '#86C6F4'},
        {color: '#FFF1CE'},
        {color: '#D29D2B'},
        {color: '#139487'},
        {color: '#86C6F4'},
        {color: '#FFF1CE'},
        {color: '#D29D2B'},
        {color: '#139487'},
        {color: '#86C6F4'},
        {color: '#FFF1CE'},
        {color: '#D29D2B'},
        {color: '#139487'},
        {color: '#86C6F4'},
        {color: '#FFF1CE'},
        {color: '#D29D2B'},
      ],
      warungModal: false,
      editWarungModal: false,
      optionWarungModal: false,
      namaWarung: '',
      namaPemilik: '',
      alamat: '',
      selectedItemIcon: {icon: 'store'},
      selectedItemColor: {color: '#5A74F8'},
      selectedItem: [],
      selectedIndex: [],
    };
  }

  tambahWarung = () => {
    const data = this.state.data;
    data.push({
      namaWarung: this.state.namaWarung,
      icon: this.state.selectedItemIcon.icon,
      color: this.state.selectedItemColor.color,
      totalHarga: 0,
      jumlahBarang: 0,
    });

    this.setState({data}, () => {
      this.setState({
        namaWarung: '',
        namaPemilik: '',
        alamat: '',
        selectedItemIcon: [],
        selectedItemColor: [],
        warungModal: false,
      });
    });
  };

  editData = () => {};
  deleteData = () => {
    Alert.alert('Hapus Data?', 'Apakah anda yakin menghapus warung ini?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        style: 'default',
        onPress: Alert.alert('Berhasil Hapus Data'),
      },
    ]);
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 15,
            elevation: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="store"
            size={28}
            color="#5A74F8"
            style={{marginLeft: 10}}
          />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>
              Iwan Snack
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({warungModal: true});
            }}>
            <View
              style={{
                backgroundColor: '#5A74F8',
                padding: 5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
                elevation: 5,
                marginRight: 10,
              }}>
              <Icon name="plus" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatGrid
            itemDimension={130}
            data={this.state.data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  paddingVertical: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation: 2,
                }}
                onPress={() => {
                  this.setState({
                    optionWarungModal: true,
                    selectedItem: item,
                    selectedIndex: index,
                  });
                }}>
                <Icon
                  name={item.icon}
                  size={40}
                  color={item.color}
                  style={{marginBottom: 10}}
                />
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                  {item.namaWarung}
                </Text>
                <Text>
                  Rp{' '}
                  {item.totalHarga
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  <Text style={{color: '#5A74F8', fontWeight: 'bold'}}>
                    {' '}
                    |{' '}
                  </Text>
                  {item.jumlahBarang} Pcs
                </Text>
              </TouchableOpacity>
            )}
          />
          <Modal isVisible={this.state.warungModal}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <ScrollView style={{flex: 1}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  Tambah Warung Baru
                </Text>
                <TextInput
                  value={this.state.namaWarung}
                  placeholder="Masukkan Nama Warung"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({namaWarung: text});
                  }}
                />
                <TextInput
                  value={this.state.namaPemilik}
                  placeholder="Masukkan Nama Pemilik"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({namaPemilik: text});
                  }}
                />
                <TextInput
                  value={this.state.alamat}
                  placeholder="Masukkan Alamat Warung"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({alamat: text});
                  }}
                />
                <View
                  style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Pilih Icon Warung
                  </Text>
                  <FlatList
                    horizontal
                    data={this.state.dataIcon}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{
                          borderWidth:
                            this.state.selectedItemIcon.icon == item.icon
                              ? 1
                              : 0,
                          borderColor: '#5A74F8',
                          borderRadius: 4,
                          height: 40,
                          width: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}
                        onPress={() => this.setState({selectedItemIcon: item})}>
                        <Icon
                          name={item.icon}
                          size={25}
                          color={
                            this.state.selectedItemIcon.icon == item.icon
                              ? '#5A74F8'
                              : 'grey'
                          }
                        />
                      </TouchableOpacity>
                    )}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                      marginTop: 10,
                    }}>
                    Pilih Warna Warung
                  </Text>
                  <FlatList
                    horizontal
                    data={this.state.dataWarna}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{
                          borderWidth:
                            this.state.selectedItemColor.color == item.color
                              ? 1
                              : 0,
                          borderColor: '#5A74F8',
                          borderRadius: 4,
                          height: 40,
                          width: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}
                        onPress={() =>
                          this.setState({selectedItemColor: item})
                        }>
                        <View
                          style={{
                            width: 35,
                            height: 35,
                            backgroundColor: item.color,
                            borderRadius: 4,
                          }}></View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </ScrollView>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    flex: 1,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#5A74F8',
                  }}
                  onPress={() => this.setState({warungModal: false})}>
                  <Text style={{color: '#5A74F8'}}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5A74F8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    flex: 1,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 5,
                  }}
                  onPress={this.tambahWarung}>
                  <Text style={{color: 'white'}}>Selesai</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal isVisible={this.state.editWarungModal}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <ScrollView style={{flex: 1}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  Edit Warung Anda
                </Text>
                <TextInput
                  value={this.state.selectedItem.namaWarung}
                  placeholder="Masukkan Nama Warung"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({namaWarung: text});
                  }}
                />
                <TextInput
                  value={this.state.selectedItem.namaPemilik}
                  placeholder="Masukkan Nama Pemilik"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({namaPemilik: text});
                  }}
                />
                <TextInput
                  value={this.state.selectedItem.alamat}
                  placeholder="Masukkan Alamat Warung"
                  style={{
                    borderWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 4,
                    borderColor: '#bdbdbd',
                    paddingLeft: 10,
                  }}
                  onChangeText={text => {
                    this.setState({alamat: text});
                  }}
                />
                <View
                  style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    Pilih Icon Warung
                  </Text>
                  <FlatList
                    horizontal
                    data={this.state.dataIcon}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{
                          borderWidth:
                            this.state.selectedItem.icon == item.icon ? 1 : 0,
                          borderColor: '#5A74F8',
                          borderRadius: 4,
                          height: 40,
                          width: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}
                        onPress={() => this.setState({selectedItemIcon: item})}>
                        <Icon
                          name={item.icon}
                          size={25}
                          color={
                            this.state.selectedItem.icon == item.icon
                              ? '#5A74F8'
                              : 'grey'
                          }
                        />
                      </TouchableOpacity>
                    )}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 5,
                      marginTop: 10,
                    }}>
                    Pilih Warna Warung
                  </Text>
                  <FlatList
                    horizontal
                    data={this.state.dataWarna}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{
                          borderWidth:
                            this.state.selectedItem.color == item.color ? 1 : 0,
                          borderColor: '#5A74F8',
                          borderRadius: 4,
                          height: 40,
                          width: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}
                        onPress={() =>
                          this.setState({selectedItemColor: item})
                        }>
                        <View
                          style={{
                            width: 35,
                            height: 35,
                            backgroundColor: item.color,
                            borderRadius: 4,
                          }}></View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </ScrollView>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    flex: 1,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#5A74F8',
                  }}
                  onPress={() => this.setState({warungModal: false})}>
                  <Text style={{color: '#5A74F8'}}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5A74F8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    flex: 1,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 5,
                  }}
                  onPress={this.tambahWarung}>
                  <Text style={{color: 'white'}}>Selesai</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal isVisible={this.state.optionWarungModal}>
            <View
              style={{
                height: 240,
                backgroundColor: '#fff',
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5A74F8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 5,
                  }}
                  onPress={() => this.setState({editWarungModal: true})}>
                  <Text style={{color: 'white'}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 5,
                    marginBottom: 40,
                  }}
                  onPress={this.deleteData}>
                  <Text style={{color: 'white'}}>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    margin: 5,
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#5A74F8',
                  }}
                  onPress={() => this.setState({optionWarungModal: false})}>
                  <Text style={{color: '#5A74F8'}}>Batal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
