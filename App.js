import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const InstagramProfile = () => {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, []);

  const fetchProfile = async () => {
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            username: 'zikrui',
            profilePicture: require('./assets/profile.png'),
            bio: 'manusia biasa makan nasi',
            followers: 10000,
            following: 2,
            posts: 3,
          }),
        1000
      )
    );
    setProfile(response);
  };

  const fetchPosts = async () => {
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { id: '1', image: require('./assets/1.png') },
            { id: '2', image: require('./assets/2.png') },
            { id: '3', image: require('./assets/3.png') },
          ]),
        1000
      )
    );
    setPosts(response);
  };

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={profile.profilePicture} style={styles.profilePicture} />
        <View style={styles.profileDetails}>
          <Text style={styles.username}>{profile.username}</Text>
          <Text style={styles.bio}>{profile.bio}</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.stats}>{profile.posts} Posts</Text>
            <Text style={styles.stats}>{profile.followers} Followers</Text>
            <Text style={styles.stats}>{profile.following} Following</Text>
          </View>
        </View>
      </View>

      {/* Posts */}
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <Image key={post.id} source={post.image} style={styles.postThumbnail} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
    color: '#888',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stats: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postThumbnail: {
    width: '33%',
    aspectRatio: 1,
    margin: 1,
  },
});

export default InstagramProfile;
