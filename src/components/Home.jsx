import React, { useState } from "react";
import LeftNavBar from "./Panels/LeftNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReportService from "../services/ReportService";

const Home = (props) => {
  return (
    <LeftNavBar>
      <div className="mx-32">
        <h5 className="font-bold text-3xl text-center m-10">
          ГЛАВНОЕ О ГЛАВНОМ И ЗАЧЕМ НУЖЕН SPOT
        </h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Viverra orci
        sagittis eu volutpat odio facilisis mauris. Nisl condimentum id
        venenatis a. Sed viverra tellus in hac habitasse platea. Gravida cum
        sociis natoque penatibus et. Id nibh tortor id aliquet. Molestie at
        elementum eu facilisis sed odio morbi quis commodo. Eget lorem dolor sed
        viverra ipsum nunc aliquet bibendum enim. Pellentesque habitant morbi
        tristique senectus et netus et. Cursus sit amet dictum sit amet justo
        donec enim diam. Vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim. Orci porta non pulvinar neque laoreet. Urna molestie at
        elementum eu facilisis sed odio morbi quis. Viverra ipsum nunc aliquet
        bibendum enim facilisis gravida neque. Diam quis enim lobortis
        scelerisque fermentum dui faucibus in ornare. Nunc mi ipsum faucibus
        vitae aliquet. Quam adipiscing vitae proin sagittis nisl rhoncus mattis
        rhoncus urna. Vel quam elementum pulvinar etiam non quam. Ultrices dui
        sapien eget mi proin. Ut tristique et egestas quis ipsum suspendisse
        ultrices. Ipsum a arcu cursus vitae congue mauris. Quis vel eros donec
        ac. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui
        faucibus. Praesent semper feugiat nibh sed. Sed odio morbi quis commodo
        odio. Condimentum vitae sapien pellentesque habitant morbi. Luctus
        venenatis lectus magna fringilla urna porttitor. Vivamus arcu felis
        bibendum ut tristique. Scelerisque eu ultrices vitae auctor eu augue ut.
        Suspendisse ultrices gravida dictum fusce ut placerat. Massa eget
        egestas purus viverra accumsan in nisl nisi. Mauris rhoncus aenean vel
        elit scelerisque mauris pellentesque pulvinar pellentesque. In fermentum
        et sollicitudin ac. Sit amet tellus cras adipiscing enim eu.
        Pellentesque elit eget gravida cum sociis natoque penatibus. Quis auctor
        elit sed vulputate mi sit amet. Odio facilisis mauris sit amet massa
        vitae tortor condimentum. Rhoncus mattis rhoncus urna neque viverra
        justo nec. Mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus. Pulvinar mattis nunc sed blandit libero volutpat.
        Sed odio morbi quis commodo odio aenean sed adipiscing. At auctor urna
        nunc id. Ac feugiat sed lectus vestibulum mattis ullamcorper. Odio ut
        enim blandit volutpat maecenas volutpat blandit aliquam. Sagittis purus
        sit amet volutpat consequat. Ultricies tristique nulla aliquet enim
        tortor at. Fringilla phasellus faucibus scelerisque eleifend donec
        pretium. Dictum at tempor commodo ullamcorper. Consequat mauris nunc
        congue nisi vitae suscipit tellus mauris. Mauris nunc congue nisi vitae
        suscipit tellus mauris a diam. Non diam phasellus vestibulum lorem sed
        risus ultricies tristique. Massa eget egestas purus viverra accumsan in.
        Accumsan tortor posuere ac ut consequat semper viverra. Suspendisse
        potenti nullam ac tortor vitae purus. In nisl nisi scelerisque eu
        ultrices vitae auctor eu augue. Mi ipsum faucibus vitae aliquet nec
        ullamcorper sit amet risus. Sed risus pretium quam vulputate dignissim
        suspendisse in est. A iaculis at erat pellentesque adipiscing commodo.
        Egestas maecenas pharetra convallis posuere morbi leo urna molestie.
        Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Leo
        integer malesuada nunc vel risus. Nisl suscipit adipiscing bibendum est
        ultricies integer. Dictum varius duis at consectetur lorem donec.
        Pulvinar neque laoreet suspendisse interdum consectetur. Pulvinar mattis
        nunc sed blandit libero. Tristique nulla aliquet enim tortor at. Laoreet
        suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
        Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Justo nec
        ultrices dui sapien. Metus aliquam eleifend mi in nulla. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu
        volutpat odio facilisis mauris. Nisl condimentum id venenatis a. Sed
        viverra tellus in hac habitasse platea. Gravida cum sociis natoque
        penatibus et. Id nibh tortor id aliquet. Molestie at elementum eu
        facilisis sed odio morbi quis commodo. Eget lorem dolor sed viverra
        ipsum nunc aliquet bibendum enim. Pellentesque habitant morbi tristique
        senectus et netus et. Cursus sit amet dictum sit amet justo donec enim
        diam. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
        Orci porta non pulvinar neque laoreet. Urna molestie at elementum eu
        facilisis sed odio morbi quis. Viverra ipsum nunc aliquet bibendum enim
        facilisis gravida neque. Diam quis enim lobortis scelerisque fermentum
        dui faucibus in ornare. Nunc mi ipsum faucibus vitae aliquet. Quam
        adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vel
        quam elementum pulvinar etiam non quam. Ultrices dui sapien eget mi
        proin. Ut tristique et egestas quis ipsum suspendisse ultrices. Ipsum a
        arcu cursus vitae congue mauris. Quis vel eros donec ac. Etiam dignissim
        diam quis enim lobortis scelerisque fermentum dui faucibus. Praesent
        semper feugiat nibh sed. Sed odio morbi quis commodo odio. Condimentum
        vitae sapien pellentesque habitant morbi. Luctus venenatis lectus magna
        fringilla urna porttitor. Vivamus arcu felis bibendum ut tristique.
        Scelerisque eu ultrices vitae auctor eu augue ut. Suspendisse ultrices
        gravida dictum fusce ut placerat. Massa eget egestas purus viverra
        accumsan in nisl nisi. Mauris rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar pellentesque. In fermentum et sollicitudin ac. Sit
        amet tellus cras adipiscing enim eu. Pellentesque elit eget gravida cum
        sociis natoque penatibus. Quis auctor elit sed vulputate mi sit amet.
        Odio facilisis mauris sit amet massa vitae tortor condimentum. Rhoncus
        mattis rhoncus urna neque viverra justo nec. Mauris pellentesque
        pulvinar pellentesque habitant morbi tristique senectus. Pulvinar mattis
        nunc sed blandit libero volutpat. Sed odio morbi quis commodo odio
        aenean sed adipiscing. At auctor urna nunc id. Ac feugiat sed lectus
        vestibulum mattis ullamcorper. Odio ut enim blandit volutpat maecenas
        volutpat blandit aliquam. Sagittis purus sit amet volutpat consequat.
        Ultricies tristique nulla aliquet enim tortor at. Fringilla phasellus
        faucibus scelerisque eleifend donec pretium. Dictum at tempor commodo
        ullamcorper. Consequat mauris nunc congue nisi vitae suscipit tellus
        mauris. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Non
        diam phasellus vestibulum lorem sed risus ultricies tristique. Massa
        eget egestas purus viverra accumsan in. Accumsan tortor posuere ac ut
        consequat semper viverra. Suspendisse potenti nullam ac tortor vitae
        purus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Mi
        ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Sed risus
        pretium quam vulputate dignissim suspendisse in est. A iaculis at erat
        pellentesque adipiscing commodo. Egestas maecenas pharetra convallis
        posuere morbi leo urna molestie. Magna etiam tempor orci eu lobortis
        elementum nibh tellus molestie. Leo integer malesuada nunc vel risus.
        Nisl suscipit adipiscing bibendum est ultricies integer. Dictum varius
        duis at consectetur lorem donec. Pulvinar neque laoreet suspendisse
        interdum consectetur. Pulvinar mattis nunc sed blandit libero. Tristique
        nulla aliquet enim tortor at. Laoreet suspendisse interdum consectetur
        libero id faucibus nisl tincidunt eget. Quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Justo nec ultrices dui sapien. Metus
        aliquam eleifend mi in nulla. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris.
        Nisl condimentum id venenatis a. Sed viverra tellus in hac habitasse
        platea. Gravida cum sociis natoque penatibus et. Id nibh tortor id
        aliquet. Molestie at elementum eu facilisis sed odio morbi quis commodo.
        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
        Pellentesque habitant morbi tristique senectus et netus et. Cursus sit
        amet dictum sit amet justo donec enim diam. Vestibulum rhoncus est
        pellentesque elit ullamcorper dignissim. Orci porta non pulvinar neque
        laoreet. Urna molestie at elementum eu facilisis sed odio morbi quis.
        Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Diam
        quis enim lobortis scelerisque fermentum dui faucibus in ornare. Nunc mi
        ipsum faucibus vitae aliquet. Quam adipiscing vitae proin sagittis nisl
        rhoncus mattis rhoncus urna. Vel quam elementum pulvinar etiam non quam.
        Ultrices dui sapien eget mi proin. Ut tristique et egestas quis ipsum
        suspendisse ultrices. Ipsum a arcu cursus vitae congue mauris. Quis vel
        eros donec ac. Etiam dignissim diam quis enim lobortis scelerisque
        fermentum dui faucibus. Praesent semper feugiat nibh sed. Sed odio morbi
        quis commodo odio. Condimentum vitae sapien pellentesque habitant morbi.
        Luctus venenatis lectus magna fringilla urna porttitor. Vivamus arcu
        felis bibendum ut tristique. Scelerisque eu ultrices vitae auctor eu
        augue ut. Suspendisse ultrices gravida dictum fusce ut placerat. Massa
        eget egestas purus viverra accumsan in nisl nisi. Mauris rhoncus aenean
        vel elit scelerisque mauris pellentesque pulvinar pellentesque. In
        fermentum et sollicitudin ac. Sit amet tellus cras adipiscing enim eu.
        Pellentesque elit eget gravida cum sociis natoque penatibus. Quis auctor
        elit sed vulputate mi sit amet. Odio facilisis mauris sit amet massa
        vitae tortor condimentum. Rhoncus mattis rhoncus urna neque viverra
        justo nec. Mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus. Pulvinar mattis nunc sed blandit libero volutpat.
        Sed odio morbi quis commodo odio aenean sed adipiscing. At auctor urna
        nunc id. Ac feugiat sed lectus vestibulum mattis ullamcorper. Odio ut
        enim blandit volutpat maecenas volutpat blandit aliquam. Sagittis purus
        sit amet volutpat consequat. Ultricies tristique nulla aliquet enim
        tortor at. Fringilla phasellus faucibus scelerisque eleifend donec
        pretium. Dictum at tempor commodo ullamcorper. Consequat mauris nunc
        congue nisi vitae suscipit tellus mauris. Mauris nunc congue nisi vitae
        suscipit tellus mauris a diam. Non diam phasellus vestibulum lorem sed
        risus ultricies tristique. Massa eget egestas purus viverra accumsan in.
        Accumsan tortor posuere ac ut consequat semper viverra. Suspendisse
        potenti nullam ac tortor vitae purus. In nisl nisi scelerisque eu
        ultrices vitae auctor eu augue. Mi ipsum faucibus vitae aliquet nec
        ullamcorper sit amet risus. Sed risus pretium quam vulputate dignissim
        suspendisse in est. A iaculis at erat pellentesque adipiscing commodo.
        Egestas maecenas pharetra convallis posuere morbi leo urna molestie.
        Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Leo
        integer malesuada nunc vel risus. Nisl suscipit adipiscing bibendum est
        ultricies integer. Dictum varius duis at consectetur lorem donec.
        Pulvinar neque laoreet suspendisse interdum consectetur. Pulvinar mattis
        nunc sed blandit libero. Tristique nulla aliquet enim tortor at. Laoreet
        suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
        Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Justo nec
        ultrices dui sapien. Metus aliquam eleifend mi in nulla. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu
        volutpat odio facilisis mauris. Nisl condimentum id venenatis a. Sed
        viverra tellus in hac habitasse platea. Gravida cum sociis natoque
        penatibus et. Id nibh tortor id aliquet. Molestie at elementum eu
        facilisis sed odio morbi quis commodo. Eget lorem dolor sed viverra
        ipsum nunc aliquet bibendum enim. Pellentesque habitant morbi tristique
        senectus et netus et. Cursus sit amet dictum sit amet justo donec enim
        diam. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
        Orci porta non pulvinar neque laoreet. Urna molestie at elementum eu
        facilisis sed odio morbi quis. Viverra ipsum nunc aliquet bibendum enim
        facilisis gravida neque. Diam quis enim lobortis scelerisque fermentum
        dui faucibus in ornare. Nunc mi ipsum faucibus vitae aliquet. Quam
        adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vel
        quam elementum pulvinar etiam non quam. Ultrices dui sapien eget mi
        proin. Ut tristique et egestas quis ipsum suspendisse ultrices. Ipsum a
        arcu cursus vitae congue mauris. Quis vel eros donec ac. Etiam dignissim
        diam quis enim lobortis scelerisque fermentum dui faucibus. Praesent
        semper feugiat nibh sed. Sed odio morbi quis commodo odio. Condimentum
        vitae sapien pellentesque habitant morbi. Luctus venenatis lectus magna
        fringilla urna porttitor. Vivamus arcu felis bibendum ut tristique.
        Scelerisque eu ultrices vitae auctor eu augue ut. Suspendisse ultrices
        gravida dictum fusce ut placerat. Massa eget egestas purus viverra
        accumsan in nisl nisi. Mauris rhoncus aenean vel elit scelerisque mauris
        pellentesque pulvinar pellentesque. In fermentum et sollicitudin ac. Sit
        amet tellus cras adipiscing enim eu. Pellentesque elit eget gravida cum
        sociis natoque penatibus. Quis auctor elit sed vulputate mi sit amet.
        Odio facilisis mauris sit amet massa vitae tortor condimentum. Rhoncus
        mattis rhoncus urna neque viverra justo nec. Mauris pellentesque
        pulvinar pellentesque habitant morbi tristique senectus. Pulvinar mattis
        nunc sed blandit libero volutpat. Sed odio morbi quis commodo odio
        aenean sed adipiscing. At auctor urna nunc id. Ac feugiat sed lectus
        vestibulum mattis ullamcorper. Odio ut enim blandit volutpat maecenas
        volutpat blandit aliquam. Sagittis purus sit amet volutpat consequat.
        Ultricies tristique nulla aliquet enim tortor at. Fringilla phasellus
        faucibus scelerisque eleifend donec pretium. Dictum at tempor commodo
        ullamcorper. Consequat mauris nunc congue nisi vitae suscipit tellus
        mauris. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Non
        diam phasellus vestibulum lorem sed risus ultricies tristique. Massa
        eget egestas purus viverra accumsan in. Accumsan tortor posuere ac ut
        consequat semper viverra. Suspendisse potenti nullam ac tortor vitae
        purus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Mi
        ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Sed risus
        pretium quam vulputate dignissim suspendisse in est. A iaculis at erat
        pellentesque adipiscing commodo. Egestas maecenas pharetra convallis
        posuere morbi leo urna molestie. Magna etiam tempor orci eu lobortis
        elementum nibh tellus molestie. Leo integer malesuada nunc vel risus.
        Nisl suscipit adipiscing bibendum est ultricies integer. Dictum varius
        duis at consectetur lorem donec. Pulvinar neque laoreet suspendisse
        interdum consectetur. Pulvinar mattis nunc sed blandit libero. Tristique
        nulla aliquet enim tortor at. Laoreet suspendisse interdum consectetur
        libero id faucibus nisl tincidunt eget. Quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Justo nec ultrices dui sapien. Metus
        aliquam eleifend mi in nulla.
      </div>
    </LeftNavBar>
  );
};
export default Home;
