import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    // 必须放在最后面
    "/": [
      {
        text: "Java",
        icon: "java",
        prefix: "posts/java/",
        collapsable: true,
        children: [
          {
            text: "基础",
            prefix: "basis/",
            icon: "basic",
            collapsable: true,
            children: [
              "java-basic-questions-01",
              "java-basic-questions-02",
              "java-basic-questions-03",
              {
                text: "重要知识点",
                icon: "important",
                collapsable: true,
                children: [
                  "why-there-only-value-passing-in-java",
                  "reflection",
                  "proxy",
                  "io",
                  "bigdecimal",
                ],
              },
            ],
          },
          {
            text: "容器",
            prefix: "collection/",
            icon: "container",
            collapsable: true,
            children: [
              "java-collection-questions-01",
              "java-collection-questions-02",
              "java-collection-precautions-for-use",
              {
                text: "源码分析",
                collapsable: true,
                children: [
                  "arraylist-source-code",
                  "hashmap-source-code",
                  "concurrent-hash-map-source-code",
                ],
              },
            ],
          },
          {
            text: "并发编程",
            prefix: "concurrent/",
            icon: "et-performance",
            collapsable: true,
            children: [
              "java-concurrent-questions-01",
              "java-concurrent-questions-02",
              {
                text: "重要知识点",
                icon: "important",
                collapsable: true,
                children: [
                  "java-thread-pool-summary",
                  "java-thread-pool-best-practices",
                  "java-concurrent-collections",
                  "aqs",
                  "reentrantlock",
                  "atomic-classes",
                  "threadlocal",
                  "completablefuture-intro",
                ],
              },
            ],
          },
          {
            text: "JVM",
            prefix: "jvm/",
            icon: "virtual_machine",
            collapsable: true,
            children: [
              "memory-area",
              "jvm-garbage-collection",
              "class-file-structure",
              "class-loading-process",
              "classloader",
              "jvm-parameters-intro",
              "jvm-intro",
              "jdk-monitoring-and-troubleshooting-tools",
            ],
          },
          {
            text: "新特性",
            prefix: "new-features/",
            icon: "features",
            collapsable: true,
            children: [
              "java8-common-new-features",
              "java8-tutorial-translate",
              "java9",
              "java10",
              "java11",
              "java12-13",
              "java14-15",
            ],
          },
        ],
      },
      {
        text: "计算机基础",
        icon: "computer",
        prefix: "posts/cs-basics/",
        collapsable: true,
        children: [
          {
            text: "网络",
            prefix: "network/",
            icon: "network",
            collapsable: true,
            children: [
              "osi&tcp-ip-model",
              "http&https",
              "http1.0&http1.1",
              "other-network-questions",
            ],
          },
          {
            text: "操作系统",
            prefix: "operating-system/",
            icon: "caozuoxitong",
            collapsable: true,
            children: [
              "operating-system-basic-questions-01",
              "linux-intro",
              "shell-intro",
            ],
          },
          {
            text: "数据结构",
            prefix: "data-structure/",
            icon: "people-network-full",
            collapsable: true,
            children: [
              "linear-data-structure",
              "graph",
              "heap",
              "tree",
              "red-black-tree",
              "bloom-filter",
            ],
          },
          {
            text: "算法",
            prefix: "algorithms/",
            icon: "suanfaku",
            collapsable: true,
            children: [
              "string-algorithm-problems",
              "linkedlist-algorithm-problems",
              "the-sword-refers-to-offer",
            ],
          },
        ],
      },
      {
        text: "数据库",
        icon: "database",
        prefix: "posts/database/",
        collapsable: true,
        children: [
          "basis",
          "character-set",
          {
            text: "MySQL",
            prefix: "mysql/",
            icon: "mysql",
            collapsable: true,
            children: [
              "mysql-questions-01",
              "a-thousand-lines-of-mysql-study-notes",
              "mysql-high-performance-optimization-specification-recommendations",
              {
                text: "重要知识点",
                icon: "important",
                collapsable: true,
                children: [
                  "mysql-index",
                  "mysql-logs",
                  "transaction-isolation-level",
                  "innodb-implementation-of-mvcc",
                  "how-sql-executed-in-mysql",
                  "some-thoughts-on-database-storage-time",
                ],
              },
            ],
          },
          {
            text: "Redis",
            prefix: "redis/",
            icon: "redis",
            collapsable: true,
            children: [
              "redis-questions-01",
              {
                text: "重要知识点",
                icon: "important",
                collapsable: true,
                children: [
                  "3-commonly-used-cache-read-and-write-strategies",
                  "redis-memory-fragmentation",
                ],
              },
            ],
          },
        ],
      },
      {
        text: "开发工具",
        icon: "Tools",
        prefix: "posts/tools/",
        collapsable: true,
        children: [
          {
            text: "Git",
            icon: "git",
            prefix: "git/",
            collapsable: true,
            children: ["git-intro", "github-tips"],
          },
          {
            text: "Docker",
            icon: "docker1",
            prefix: "docker/",
            collapsable: true,
            children: ["docker-intro", "docker-in-action"],
          },
          {
            text: "IDEA",
            icon: "intellijidea",
            link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
          },
        ],
      },
      {
        text: "系统设计",
        icon: "xitongsheji",
        prefix: "posts/system-design/",
        collapsable: true,
        children: [
          "system-design-questions",
          {
            text: "基础",
            prefix: "basis/",
            icon: "basic",
            collapsable: true,
            children: ["RESTfulAPI", "naming", "refactoring"],
          },
          {
            text: "常用框架",
            prefix: "framework/",
            icon: "framework",
            collapsable: true,
            children: [
              {
                text: "Spring",
                prefix: "spring/",
                collapsable: true,
                children: [
                  "spring-knowledge-and-questions-summary",
                  "spring-common-annotations",
                  "spring-transaction",
                  "spring-design-patterns-summary",
                  "spring-boot-auto-assembly-principles",
                ],
              },
              "mybatis/mybatis-interview",
              "netty",
              {
                text: "SpringCloud",
                prefix: "springcloud/",
                children: ["springcloud-intro"],
              },
            ],
          },
          {
            text: "安全",
            prefix: "security/",
            icon: "security-fill",
            collapsable: true,
            children: [
              "basis-of-authority-certification",
              "advantages&disadvantages-of-jwt",
              "sso-intro",
              "sentive-words-filter",
              "data-desensitization",
            ],
          },
          "schedule-task",
        ],
      },
      {
        text: "分布式",
        icon: "distributed-network",
        prefix: "posts/distributed-system/",
        collapsable: true,
        children: [
          {
            text: "理论&算法&协议",
            prefix: "theorem&algorithm&protocol/",
            collapsable: true,
            children: ["cap&base-theorem", "paxos-algorithm", "raft-algorithm"],
          },
          "api-gateway",
          "distributed-id",
          {
            text: "RPC",
            prefix: "rpc/",
            collapsable: true,
            children: ["dubbo", "why-use-rpc"],
          },
          "distributed-transaction",
          {
            text: "分布式协调",
            prefix: "distributed-process-coordination/",
            collapsable: true,
            children: [
              "zookeeper/zookeeper-intro",
              "zookeeper/zookeeper-plus",
              "zookeeper/zookeeper-in-action",
            ],
          },
        ],
      },
      {
        text: "高性能",
        icon: "et-performance",
        prefix: "posts/high-performance/",
        collapsable: true,
        children: [
          "read-and-write-separation-and-library-subtable",
          "load-balancing",
          {
            text: "消息队列",
            prefix: "message-queue/",
            icon: "MQ",
            collapsable: true,
            children: [
              "message-queue",
              "kafka-questions-01",
              "rocketmq-intro",
              "rocketmq-questions",
              "rabbitmq-intro",
            ],
          },
        ],
      },
      {
        text: "高可用",
        icon: "CalendarAvailability-1",
        prefix: "posts/high-availability/",
        collapsable: true,
        children: [
          "high-availability-system-design",
          "limit-request",
          "fallback&circuit-breaker",
          "timeout-and-retry",
          "cluster",
          "disaster-recovery&remote-live",
          "performance-test",
        ],
      },
    ],
  });
