import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import COLORS from '../../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { useAuth } from '../../contexts/Auth';
import { getUsers, registerUser } from '../../lib/services/api';



const Home = () => {
    const [users, setUsers] = React.useState([])
    const {signOut} = useAuth();

    React.useEffect(() => {
        getUsers(setUsers)
      }, [])
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent:'center', flex: 1, marginVertical: 24}}>
                    <Text style={{color: COLORS.black, fontSize: 34, fontWeight: 'bold'}}>Usuários Cadastrados</Text>
                </View>
                <View style={{alignItems: 'center', alignSelf:'center', flex: 1, marginVertical: 12}}>
                    {users.map((user) => (
                        <Text 
                            key={user.id} 
                            style={{color: COLORS.black}}>
                            {user.email} ({user.password})
                        </Text>
                    ))}
                </View>
            
                <Button 
                    title={'Deslogar'}
                    onPress={signOut}
                    filled
                    style={{marginTop: 60,marginHorizontal: 16}}
                />
                
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;