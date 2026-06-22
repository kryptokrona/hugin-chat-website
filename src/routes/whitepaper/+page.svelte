<div class="section">
    <div class="container">
        <h1>Hugin Messenger Whitepaper</h1>
        <h2>Introduction</h2>
        <p>Hugin Messenger is a decentralized private messenger and social network with native
            cryptocurrency payments. With it you can engage in secure communications and make
            untraceable transactions, all without any trusted parties.</p>

        <p>There are many private messaging services on the market today, but how private they really
            are is a point of debate, and often you have to take their promises at face value. Due to parts
            of their system being closed source, or them having opaque distribution lines, like with
            Google Play or the Apple App Store (1) you have to trust the developer's competence and
            intentions. In addition, centralized systems such as Signal, WhatsApp, Facebook Messenger
            etc are dependent on a specific company's servers and they can become subjected to
            coercion by third parties, which could lead to shutdowns, forced decryption of private
            messages, censorship, as well as abuse of power.</p>

        <p>Centralized server structures, even if distributed, can fall victim to censorship by
            authoritarian regimes that shun freedom of speech, such as the case where Signal was
            censored in Iran, leading Signal to obfuscate their server's origin with the Amazon owned
            domain name Souq.com. Amazon responded with threats to take down their services at
            AWS, which could have lead to serious outages, or at worst putting a halt to the network
            (2).</p>

        <p>To build a private messaging service that evades these potential issues altogether, the entire
            infrastructure for transmission, storage and client-side applications must be based on open
            source and decentralized technology.</p>

        <p>By being decentralized it is possible to protect the network from being censored, taken
            offline, or somehow being made unavailable, simply because there is no single point of
            failure - you would have to shut down every node in the network to effectively shut the
            network down, and even then, new nodes could join the network at any time.</p>

        <p>Decentralization also lends another important prerequisite for privacy, which is
            permissionless operation. In traditional centralized systems, a central authority controls
            permissions, perhaps forcing you to give up personal information to use the network. In a
            decentralized system, there is no such authority. Anyone can interact with the network at any
            time, without limitations other than those - in Hugin's case - consensus rules that govern the
            network, and those are always the same for all users.</p>

        <p>Another positive feature of decentralization is that it can make certain operations a lot less
            costly, and in turn more scalable. In Hugin Messenger, for example, you can make true
            peer-to-peer calls, where the data is only travelling between you and your recipient. In a
            centralized system, that call would be relayed through a centralized server, costing the
            centralized entity valuable resources, in turn causing an incentive for it to profit off of the
            user's interactions with their service. Hugin is immune to this race to make more profit,
            since the bulk of communication happens directly between the parties involved, rather than
            through any company-owned infrastructure.</p>

        <p>By being open source, users and experts can combine efforts to scrutinize the source code,
            making sure it's safe and legitimate - a process that has been shown to create the most
            robust and reliable systems over the decades (3).</p>

        <p>Hugin Messenger also lets you seamlessly send monetary transactions in combination with
            messages on the same protocol, without needless fragmentation or complexity - in other
            words; Hugin was born to be a combined messaging service and a tool for transacting
            money that puts privacy first.</p>

        <h2>Features</h2>
        <h3>Private messaging</h3>
        <p>Hugin Messenger is a private messenger that uses modern cryptography to secure messages
            sent directly between peers, or relayed through the decentralized Hugin Node network when
            a recipient is offline. With the encryption used in Hugin Messenger, it is possible to send
            private, encrypted messages that can only be read by the sender and the recipient. There are
            no middlemen that keep any master keys, so there is no way of anyone eavesdropping on the
            content of a conversation.</p>

        <h3>Private video and voice calls</h3>
        <p>With Hugin Messenger, you can make private peer-to-peer video and voice calls that often
            beat mainstream services in terms of video and audio quality, latency, as well as in privacy.</p>

        <h3>File sharing</h3>
        <p>Hugin Messenger lets users send files of any size without any cost or restrictions, where
            files are sent completely peer-to-peer.</p>

        <h3>Social network</h3>
        <p>Hugin also has a public social network feature, called "the feed", where users can discover new
            communities and users in a way similar to social media platforms but has the additional
            upsides of being completely decentralized and permissionless. Instead of "the algorithm" feeding 
            you whatever maximizes engagement and profit for the owners of the platform, Hugin uses what is dubbed
            "social proximity", where you are fed messages from your friends, their friends and so on.</p>

        <h2>Technology</h2>
        <h3>Architecture</h3>
        <p>Hugin Messenger uses hyperswarm (4) to connect users directly to each other in a
            peer-to-peer fashion whenever possible. When both the sender and recipient are online at
            the same time, messages travel directly between their devices without passing through any
            other party on the network.</p>

        <p>This direct connection model, however, requires both parties to be running the application
            simultaneously, which is not always the case, especially on mobile devices where
            backgrounding tasks is often restricted by the manufacturer. To handle this, a decentralized
            network of community-run <em>Hugin Nodes</em> stores messages on behalf of offline users
            until they come back online. A small number of master nodes also relay messages to iOS
            and Android push notification services, so users are notified instantly even when the app
            itself isn't running. Of course, the data in the notifications is also end-to-end encrypted.</p>

        <div style="display: flex; justify-content: center;">
            <img src="/fig1.png" alt="hugin-architecture-figure" style="max-width: 800px; height: auto;"/>
        </div>

        <p>In the figure above, Bob has sent his Hugin address to Alice, and Alice composes the first message to Bob.
            Since this is the very first message between the two, there is not yet an active peer-to-peer connection established.
            Instead, the message is encrypted by Alice and then sent to the Hugin Node network, and then relayed to Bob when he comes online.</p>

        <div style="display: flex; justify-content: center;">
            <img src="/fig2.png" alt="hugin-p2p-figure" style="max-width: 600px; height: auto;"/>
        </div>

        <p>For subsequent messages, Alice and Bob can communicate directly with each other without needing to go through the Hugin Node network, as long as they are both online at the same time. 
        This is depicted in the figure above, where Alice and Bob have established a direct peer-to-peer connection, and their messages are sent directly between their devices without any intermediaries.
        If either of them goes offline, the messages will again be relayed through the Hugin Node network until they come back online. </p>

        <div style="display: flex; justify-content: center;">
            <img src="/fig3.png" alt="hugin-group-figure" style="max-width: 600px; height: auto;"/>
        </div>

        <p>
            In the figure above, the P2P mesh between users in a group chat is depicted, where each user is connected to 
            every other user in the group. When a message is sent in the group, it is encrypted and sent directly to all 
            other members of the group through their respective peer-to-peer connections. If any member of the group is 
            offline, the message will be relayed through the Hugin Node network until they come back online.

        </p>

        <h3>Hugin Nodes</h3>

        <p>A Hugin Node is something anybody can host by themselves on cheap hardware such as a
            Raspberry Pi, which means the entire backend of Hugin Messenger is decentralized and
            independent of any trusted party. Because anyone can run a node, anyone can in principle
            gain access to the ciphertext passing through the network. This is a deliberate design choice
            rather than a weakness: rather than relying on "security through obscurity," which is widely
            considered a fallacy in cryptographic design (5), Hugin is built so that the system remains
            secure even when its inner workings, and the ciphertexts flowing through it, are fully exposed
            to public scrutiny.</p>

        <h3>Incentives and Proof-of-Work</h3>
        <p>Volunteers who run Hugin Nodes are not left uncompensated. Hugin Messenger is closely
            interconnected with the XKR cryptocurrency, and node operators are rewarded for the
            resources they contribute to the network.</p>

        <p>This works through Proof-of-Work (PoW). Whenever a user sends a message that cannot be
            delivered directly to the recipient, the network of Hugin Nodes has to spend resources to store
            and transmit it. To compensate for this, the sender's device is asked to solve a small PoW
            problem before the message is accepted. This is easy enough for even a mobile device to
            solve in a few seconds, but expensive enough that large-scale spam against the network
            becomes impractical. The completed PoW is collected by the connected node and
            contributes towards the minting of new XKR, which functions as the node operator's reward
            for keeping the network running. In this way, Hugin clients pay for the infrastructure they use
            with small amounts of computation, creating a self-sustaining incentive loop that doesn't
            depend on outside funding, advertising, or donations.</p>

        <h3>Encryption</h3>
        <p>Direct messages between two users are protected using elliptic-curve Diffie-Hellman (ECDH)
            key exchange, building a shared secret between sender and recipient that is then used to
            encrypt the conversation. Group chats and boards instead use symmetric encryption, where
            all members of a group share a single encryption key.</p>

        <p>For the very first message between two users who haven't previously been in contact, a
            sealed box construction is used, allowing the recipient to decrypt the initial message without
            needing to already know the encryption key. This keeps first-contact messages indistinguishable
            from any other traffic on the network, protecting users from being tracked based on who
            they are establishing contact with.</p>

        <p>For group chats, the shared symmetric key has to be distributed to members through a
            secure channel ahead of time, in contrast to the public keys used for one-on-one messaging,
            which can be shared openly. The tradeoff is that if any single member of a board is
            compromised, the confidentiality of the entire board is at risk - an area of active research
            and improvement (see <em>Looking Ahead</em> below).</p>

        <h3>WebRTC</h3>
        <p>WebRTC (Web Real-Time Communication) is a free and open-source project providing web
            browsers and mobile applications with real-time communication via simple application
            programming interfaces (APIs). It allows audio and video communication to work inside
            web pages by enabling direct peer-to-peer communication, eliminating the need to install
            plugins or download native apps (6).</p>

        <p>Hugin Messenger uses WebRTC to establish direct peer-to-peer connections between two
            users for audio and video calls. The signalling exchange needed to set up such a
            connection, normally handled by a centralized server in most WebRTC implementations, is
            instead sent as a regular encrypted Hugin message, keeping the entire process free of any
            centralized dependency.</p>

        <h2>Tokenomics</h2>
        <p>Because sending a message through the Hugin Node network requires solving a small
            Proof-of-Work problem rather than spending XKR directly, using Hugin Messenger doesn't
            require holding or spending funds for everyday messaging. XKR remains central to the
            ecosystem as the reward node operators receive for contributing the resources that keep
            the network running. Users can also send XKR to each other using the app creating organic
             demand for the currency as usage of Hugin grows.</p>

        <h2>Looking Ahead</h2>
        <p>Hugin Messenger is under continuous development, with several improvements on the
            roadmap to further strengthen its security guarantees:</p>

        <p><strong>Post-quantum security.</strong> Like most cryptographic systems deployed today, Hugin's
            current key exchange relies on elliptic-curve cryptography, which could in principle be
            broken by a sufficiently powerful quantum computer in the future. Because ciphertexts
            relayed through the open Hugin Node network are visible to anyone running a node, there is
            a long-term risk that encrypted messages sent today could be collected now and decrypted
            later once such hardware exists. To address this, a hybrid post-quantum key exchange
            scheme, combining the current ECDH exchange with ML-KEM, a quantum-resistant
            algorithm standardized by NIST in 2024, is planned for the initial contact flow between
            users. This keeps all of today's security guarantees fully intact while adding resistance
            against future quantum attacks.</p>

        <p><strong>Forward secrecy.</strong> Integrating a Double Ratchet mechanism for direct messages is
            planned, ensuring that even if a key is ever compromised, only a limited window of messages
            is exposed rather than an entire conversation history.</p>

        <p><strong>Group chat access control.</strong> Migrating private boards and group chats to a Message
            Layer Security (MLS) based design is being explored, enabling members to be added or
            removed from a group with cryptographic guarantees, rather than relying on a single shared
            key that every member must trust equally.</p>

        <h2>Future</h2>
        <p>Hugin can be seen as a protocol on top of the internet at large, a decentralized "dropbox" on
            which you can publish anything, either for you and your friend, or the community at large.
            One of our future goals is to bring a comprehensive API to developers, enabling the
            community to build decentralized apps on Hugin.</p>
        <p>Such apps could include, but are not limited to, a live and recorded video and music
            streaming service, e-commerce services, and atomic swap trading between XKR and other
            cryptocurrencies.</p>

        <p>To sum it up: Hugin can become a scalable protocol where developers can build virtually any
            service from the old web, but with the added benefits of being decentralized, having
            privacy-by-default, and built-in payments, taking the spirit of Hugin and Kryptokrona to the
            next generation of applications.</p>

        <h2>Summary</h2>
        <p>Hugin Messenger uses a combination of peer-to-peer networking, a decentralized node
            relay system, and modern cryptography to achieve a truly decentralized and scalable solution
            to private online messaging, as well as content publication with built-in economic tools to
            enable tipping, shopping, content subscriptions, and much more.</p>
        <p>One of the main goals of this project has been to make it easy for non-technical users to
            make use of secure cryptography that, despite having been around for many years, has not
            made sense to integrate for corporations that mine data as an imperative part of their
            business plan.</p>
        <p>Although it is true that you can use tools such as PGP to encrypt messages on any platform,
            not everyone has the technical knowledge to use these available options. With Hugin, this
            process is automated and made as easy as typing "Hello" and hitting enter.</p>
        <p>Hugin Messenger is, in its essence, a resilient and secure, private and untraceable
            messaging and transaction platform that is actively evolving to stay ahead of both today's
            and tomorrow's security challenges.</p>
        <p>At the current juncture clients for Windows, macOS and Linux are available on our GitHub (9),
            and Android and iPhone versions are also available (10).</p>

        <p>Harry Eriksson<br/>
            info@kryptokrona.se<br/>
            kryptokrona.se</p>

        <h2>Sources</h2>
        <div class="sources">
            <a href="https://drewdevault.com/2018/08/08/Signal.html">1. Drewdevault</a>
            <a href="https://signal.org/blog/looking-back-on-the-front">2. Signal</a>
            <a href="https://courses.cs.washington.edu/courses/csep590/05au/whitepaper_turnin/oss(10).pdf">3.
                Washington edu</a>
            <a href="https://github.com/holepunchto/hyperswarm">4. Hyperswarm</a>
            <a href="https://www.schneier.com/books/applied_cryptography">5. Applied Cryptography, Schneier</a>
            <a href="https://en.wikipedia.org/wiki/WebRTC">6. Wikipedia WebRTC</a>
            <a href="https://en.wikipedia.org/wiki/BitTorrent">7. Wikipedia BitTorrent</a>
            <a href="https://openalias.org">8. OpenAlias</a>
            <a href="https://github.com/kryptokrona/hugin-messenger">9. Github Hugin Messenger</a>
            <a href="https://github.com/kryptokrona/hugin-mobile">10. Github Hugin Mobile</a>
        </div>
    </div>
</div>

<style lang="scss">

    .section {
      margin: 100px 0;
    }

    h1 {
        margin: 1rem 0;
    }

    h2 {
      margin-top: 4rem;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    p {
      opacity: 70%;
      margin: 1rem 0;
    }

    .sources {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        color: var(--text-color);
      }
    }

    img {
      width: 100%;
      margin: 2rem 0;
    }

</style>
